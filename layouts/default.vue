<template>
  <div>
    <MainHeaders></MainHeaders>
    <div class="container mx-auto" style="height: 60em">
      <slot></slot>
    </div>
    <MainFooters></MainFooters>
  </div>
</template>

<script setup lang="ts">
import "tw-elements"
</script>
