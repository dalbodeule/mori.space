<template>
  <div>
    <MainHeaders/>
    <div class="container" style="min-height: 80vh; padding: 2rem 0">
      <Adsbygoogle ad-slot="4386636415" ad-format="auto" />
      <div class="content">
        <slot/>
      </div>
      <Adsbygoogle ad-slot="9403901631" ad-format="auto" />
    </div>
    <MainFooters/>
  </div>
</template>
