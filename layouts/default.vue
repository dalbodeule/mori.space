<template>
  <div>
    <MainHeaders></MainHeaders>
    <div class="container mx-auto m-auto my-10" style="height: 60em">
      <slot></slot>
    </div>
    <MainFooters></MainFooters>
    <ClientOnly>
      <TailwindElements></TailwindElements>
    </ClientOnly>
  </div>
</template>
