<template>
  <div>
    <headers/>
    <div class="ad">
      <!-- On Demand-main -->
      <ins class="adsbygoogle adslot_1"
        style="display:block"
        data-ad-client="ca-pub-2810659463174293"
        data-ad-slot="4386636415"
        data-ad-format="auto"></ins>
      <script>
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      </script>
      <p>google AD</p>
    </div>
    <div id="contents" class="container">
      <nuxt/>
    </div>
    <div style="margin-top: -20px" class="ad">
      <!-- On Demand-footer -->
      <ins class="adsbygoogle adslot_1"
        style="display:block"
        data-ad-client="ca-pub-2810659463174293"
        data-ad-slot="9403901631"
        data-ad-format="auto"></ins>
      <script>
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      </script>
      <p>google AD</p>
    </div>
    <footers/>
  </div>
</template>

<script>
import 'materialize-css/dist/css/materialize.css'
import 'font-awesome/css/font-awesome.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '~/assets/init.css'

import Headers from '~/components/Header.vue'
import Footers from '~/components/Footer.vue'

export default {
  components: {
    Headers,
    Footers
  }
}
</script>
