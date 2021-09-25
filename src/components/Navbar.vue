<template>
  <b-navbar
    toggleable="lg"
    class="navbar-shadow"
    type="dark"
  >
    <b-navbar-brand to="/">
      <img :src="require('@/assets/img/logo.png')" height="55px" class="mb-1"/>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Inicio</b-nav-item>
        <SearchBar></SearchBar>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import SearchBar from './Categorys/SearchBar'
import store from '@/store'

export default {
  components: { SearchBar },
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
<style>
.navbar-shadow {
  -webkit-box-shadow: 0 4px 24px 0 rgba(34,41,47,.1);
  box-shadow: 0 4px 24px 0 rgba(34,41,47,.1);
  background: #181818 !important;
}
</style>