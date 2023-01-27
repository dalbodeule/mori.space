<template>
  <nav
    class="relative w-full ex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light"
  >
    <div
      class="container-fluid w-full flex flex-wrap items-center justify-between px-6"
    >
      <button
        class="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon icon="bars" />&nbsp;
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse flex-grow items-center"
      >
        <NuxtLink
          class="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1"
          to="/"
        >
          <font-awesome-icon icon="house" size="lg" />
        </NuxtLink>
        <!-- Left links -->
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <li class="nav-item p-2">
            <NuxtLink
              class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              to="/test1"
              >Test1</NuxtLink
            >
          </li>
          <li class="nav-item p-2">
            <NuxtLink
              class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              to="/test2"
              >Test2</NuxtLink
            >
          </li>
          <li class="nav-item p-2">
            <NuxtLink
              class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              to="/test3"
              >Test3</NuxtLink
            >
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="flex items-center relative">
        <!-- Icon -->
        <a
          class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4"
          href="#"
        >
          Test4
        </a>
        <div class="dropdown relative">
          <a
            id="dropdownMenuButton1"
            class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>Test5 <font-awesome-icon icon="caret-down" /></span>
          </a>
          <ul
            class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >Action</a
              >
            </li>
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >Another action</a
              >
            </li>
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >Something else here</a
              >
            </li>
          </ul>
        </div>
        <div class="dropdown relative">
          <a
            id="dropdownMenuButton2"
            class="dropdown-toggle flex items-center hidden-arrow"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>Test6 <font-awesome-icon icon="caret-down" /></span>
          </a>
          <ul
            class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >Action</a
              >
            </li>
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >Another action</a
              >
            </li>
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >Something else here</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- Right elements -->
    </div>
  </nav>
</template>

<script setup lang="ts"></script>
