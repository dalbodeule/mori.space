# mori.space

Cloudflare EmDash + Astro + Tailwind CSS로 운영하는 개인 포트폴리오입니다.

프로젝트 소개와 기술 글을 모두 EmDash의 `posts` 컬렉션에 게시글 형태로 관리합니다. 기존 작업물은 `seed/seed.json`에 초기 콘텐츠로 옮겨 두었고, 이후 글은 `/_emdash/admin`에서 작성할 수 있습니다.

## 로컬 개발

```bash
npm install
npm run dev
```

로컬 Cloudflare 환경에서 D1/R2를 연결해 테스트하려면 Wrangler의 로컬 바인딩을 사용합니다. 배포 전에는 먼저 계정에 D1 데이터베이스 `mori-space`와 R2 버킷 `mori-space-media`를 만든 뒤 `wrangler.jsonc`의 설정을 맞춰 주세요.

## 배포

```bash
npx wrangler d1 create mori-space
npx wrangler r2 bucket create mori-space-media
npx emdash migrate --from-config --config=astro.config.mjs --d1=mori-space --wrangler-config=wrangler.jsonc
npm run deploy
```

`wrangler d1 create`가 반환한 `database_id`를 `wrangler.jsonc`의 D1 항목에 추가해야 합니다. 배포 후 `/_emdash/admin`에서 `seed/seed.json`의 게시글을 입력하거나, 기존 EmDash 인스턴스에서 export한 seed를 가져올 수 있습니다. 로컬 seed 형식 검증은 `npx emdash seed seed/seed.json --validate`로 실행합니다.

이미지는 R2에 업로드됩니다. 영상 업로드와 스트리밍 플레이어는 Cloudflare Stream provider를 사용하므로, 영상 기능을 사용할 때는 Stream 권한이 있는 API token을 Workers secret으로 등록합니다.

```bash
npx wrangler secret put CF_ACCOUNT_ID
npx wrangler secret put CF_STREAM_TOKEN
```

EmDash는 D1에 콘텐츠와 스키마를 저장하고, R2를 미디어 라이브러리로 사용합니다. Cloudflare Workers Paid 플랜에서는 필요할 때 `worker_loaders`와 `LOADER` 바인딩을 추가해 sandboxed plugin을 활성화할 수 있습니다.

## 관리자와 권한

현재 설정은 EmDash 기본 passkey 인증입니다. 최초 `/_emdash/admin` 설정에서 만든 첫 계정이 자동으로 Admin이 되며, 이후 사용자는 Admin이 초대해야 합니다. Admin은 사용자·권한·콘텐츠 모델·미디어를 관리할 수 있고, 일반 공개 방문자는 게시글을 읽기만 하며 작성할 수 없습니다.

정말 본인 계정만 관리자 화면에 접근하게 하려면 Cloudflare Access에서 `/_emdash/*`를 본인 이메일 정책으로 보호하고, EmDash의 `access()` adapter와 `roleMapping`을 연결하는 방식이 가장 강합니다. Access를 쓰면 production에서는 Access가 유일한 인증 수단이 되고, `Admins: 50` 같은 그룹 매핑으로 Admin을 인식합니다.

## 최초 관리자와 WebAuthn

EmDash의 기본 인증 자체가 WebAuthn passkey입니다. seed 파일은 컬렉션·필드·콘텐츠를 미리 만들지만, 사용자와 브라우저의 WebAuthn credential을 미리 생성하지는 않습니다. 따라서 다음 순서로 최초 관리자만 등록합니다.

1. 배포 후 `https://mori.space/_emdash/admin/`에 접속합니다.
2. Setup Wizard에서 사이트 설정과 본인 이메일을 입력합니다.
3. macOS Touch ID, 보안 키, iCloud Keychain 등의 passkey를 등록합니다.
4. 첫 번째 계정이 Admin으로 생성됩니다.
5. 로그인 후 Account Settings에서 백업 passkey를 추가할 수 있습니다.

`SITE_URL`은 현재 `wrangler.jsonc`에 `https://mori.space`로 설정되어 있습니다. WebAuthn은 등록한 도메인(origin)에 묶이므로 실제 운영 도메인과 이 값이 반드시 일치해야 합니다. Cloudflare Access adapter를 선택하면 Access가 인증을 담당하고 EmDash passkey는 production에서 함께 사용할 수 없습니다.
