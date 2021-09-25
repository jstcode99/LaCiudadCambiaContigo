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
  watch: { 
    '$route' (to){
      if(!to.params.category) this.videos = Object.assign({}, store.getters.videos)
    }
  },
  created() {
    this.videos = store.getters.videos
    this.categorys = store.getters.categorys
    if(this.$route.params.category) {
      this.videos = this.videos.filter(video => video.idCategory === parseInt(this.$route.params.category, 10))
    }
  }
}
</script>