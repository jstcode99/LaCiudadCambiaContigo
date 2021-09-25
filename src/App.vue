<template>
  <div class="app">
    <Navbar></Navbar>
    <b-overlay
      :show="overlay"
      :variant="variant"
      :opacity="opacity"
      :blur="blur"
      rounded="sm">
      <div class="wrapper m-2">
        <div id="content-wrapper bg-dark">
          <div class="container-fluid pb-0">
            <router-view/>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </b-overlay>
  </div>
</template>
<script>

import Footer from './components/Footer'
// import Footer from './components/Footer'
import Navbar from './components/Navbar'
import store from '@/store'

export default {
  name: 'App',
    components: {
    Footer,
    // Footer,
    Navbar,
  },
  data() {
    return {
      variant: 'dark',
      opacity: 0.52,
      blur: '2px',
    }
  },
  computed: {
    overlay() {
      return store.getters.overlay
    }
  }
}
</script>
