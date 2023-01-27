<template>
  <footer class="text-center lg:text-left bg-gray-100 text-gray-600">
    <div
      class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300"
    >
      <div class="mr-12 hidden lg:block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div class="flex justify-center">
        <a href="https://github.com/dalbodeule" class="text-gray-600">
          <font-awesome-icon icon="fab fa-github" />
        </a>
      </div>
    </div>
    <div class="mx-6 py-10 text-center md:text-left">
      <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="">
          <h6
            class="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start"
          >
            <font-awesome-icon icon="spinner" />&nbsp;Loading...
          </h6>
          <p>This site is testing with tailwind-elements!</p>
        </div>
        <div class="">
          <!--<h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">Products</h6>
          <p class="mb-4">
            <a href="#!" class="text-gray-600">Angular</a>
          </p>
          <p class="mb-4">
            <a href="#!" class="text-gray-600">React</a>
          </p>
          <p class="mb-4">
            <a href="#!" class="text-gray-600">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-gray-600">Laravel</a>
          </p>-->
        </div>
        <div class="">
          <!--<h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">Useful links</h6>
          <p class="mb-4">
            <a href="#!" class="text-gray-600">Pricing</a>
          </p>
          <p class="mb-4">
            <a href="#!" class="text-gray-600">Settings</a>
          </p>
          <p class="mb-4">
            <a href="#!" class="text-gray-600">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-gray-600">Help</a>
          </p>-->
        </div>
        <div class="">
          <h6
            class="uppercase font-semibold mb-4 flex justify-center md:justify-start"
          >
            Contact
          </h6>
          <p class="flex items-center justify-center md:justify-start mb-4">
            <font-awesome-icon icon="envelope" />&nbsp; webmaster@mori.space
          </p>
          <p class="flex items-center justify-center md:justify-start">
            <font-awesome-icon icon="fax" />&nbsp; + 82 504 480 6498
          </p>
        </div>
      </div>
    </div>
    <div class="text-center p-6 bg-gray-200">
      <span>© 2023 Copyright : </span>
      <NuxtLink class="text-gray-600 font-semibold" to="/">mori.space</NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
