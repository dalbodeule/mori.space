<template>
  <header>
    <nav class="blue lighten-1 theme">
      <div class="nav-wrapper"><nuxt-link to="/" class="brand-logo">ON Demand</nuxt-link><nuxt-link to="#" data-activates="mobile-menu" class="button-collapse"><i class="material-icons">menu</i></nuxt-link>
        <ul class="right hide-on-med-and-down">
          <li><nuxt-link to="/introduce">개발자 정보</nuxt-link></li>
          <li><a href="#" data-activates="dev-nav" class="dropdown-button">Dev<i class="material-icons right">arrow_drop_down</i></a>
            <ul id="dev-nav" class="dropdown-content">
              <li><nuxt-link to="/dev" class="blue-text text-lighten-1">Dev</nuxt-link></li>
              <li><nuxt-link to="/dev/moribot" class="blue-text text-lighten-1">MoriBot</nuxt-link></li>
              <li><nuxt-link to="/dev/kkutu" class="blue-text text-lighten-1">모리끄투</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/donate">Donate</nuxt-link></li>
          <li>
            <p style="width: 1em"></p>
          </li>
        </ul>
        <ul id="mobile-menu" class="side-nav">
          <li><nuxt-link to="/introduce">개발자 정보</nuxt-link></li>
          <li>
            <a href="/dev" data-activates="dev-side" class="dropdown-button">Dev<i class="material-icons right">arrow_drop_down</i></a>
            <ul id="dev-side" class="dropdown-content">
              <li><nuxt-link to="/dev">Dev</nuxt-link></li>
              <li><nuxt-link to="/dev/moribot">MoriBot</nuxt-link></li>
              <li><nuxt-link to="/dev/kkutu">모리끄투</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/donate">Donate</nuxt-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
