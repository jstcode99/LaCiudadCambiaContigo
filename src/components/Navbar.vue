<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">
      <img :src="require('@/assets/img/logo.png')" height="35px" class="mb-1"/>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Inicio</b-nav-item>
        <b-nav-form>
          <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import store from '@/store'

export default {
  name: "Navbar",
  props: {
    title: String,
    logo: String,
  },
  data() {
    return {
      videos: [],
    }
  },
  created() {
    this.videos = store.getters.videos
  }
};
</script>
