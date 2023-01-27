<template>
    <div>
        <Headers></Headers>
        <div class="container mx-auto" style="height:60em;">
            <slot></slot>
        </div>
        <Footers></Footers>
    </div>
</template>

<script setup lang="ts">
  import 'tw-elements'
</script>
