<template>
  <div class="app">
    <Navbar></Navbar>
    <div class="wrapper m-2">
      <div id="content-wrapper bg-dark">
        <div class="container-fluid pb-0">
          <router-view/>
        </div>
      </div>
    </div>
    <!-- <Footer></Footer> -->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>
<script>

// import Footer from './components/Footer'
import Navbar from './components/Navbar'
export default {
  name: 'App',
    components: {
    // Footer,
    Navbar,
  },
  data() {
    return {
    }
  },
}
</script>
