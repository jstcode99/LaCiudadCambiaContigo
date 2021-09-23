<template>
  <div>
    <CategorysSlide :categorys="categorys" />
      <hr/>
    <CardsVideos :videos="videos" />
  </div>
</template>

<script>

import CardsVideos from '../components/CardsVideos/CardsVideos'
import CategorysSlide from '../components/Categorys/CategorysSlide'
import store from '@/store'

export default {
  name: 'Home',
  components: {
    CardsVideos,
    CategorysSlide,
  },
  data() {
    return {
      videos: [],
      categorys: [],
    }
  },
  created() {
    this.videos = store.getters.videos
    this.categorys = store.getters.categorys
  }
}
</script>