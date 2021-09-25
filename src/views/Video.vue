<template>
  <div class="container-fluid pb-0">
    <div class="video-block-right-list section-padding">
      <div class="row mb-4">
        <b-col
          class="col-md-8  col-sm-12"
          align-self="baseline"
        >
          <div class="single-video" v-if="video">
            <video class="video" width="100%" height="615" controls>
              <source :src="video.src" type="video/mp4">
              <!-- <source src="@/assets/videos/21-05-20 DON DANIEL.mp4" type="video/mp4" > -->
            </video>
          </div>
          <SingleVideoInfo :video="video" />
        </b-col>
        <b-col
          class="col-md-4 col-sm-12"
          align-self="stretch"
        >
          <div class="video-slider-right-list">
            <h6 class="m-2 text-light">Videos relacionado</h6>
            <CardVideo
              v-for="(video, index) in videosRelacionados"
              :key="index"
              :video="video"
              height="auto"
              classNames="video-card-list"
            />
          </div>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
import SingleVideoInfo from '../components/CardsVideos/SingleVideoInfo'
import CardVideo from "../components/CardsVideos/CardVideo";
// import CardsVideos from '../components/CardsVideos/CardsVideos'
// import CategorysSlide from '../components/Categorys/CategorysSlide'
import store from "@/store";

export default {
  name: "Video",
  components: {
    SingleVideoInfo,
    CardVideo,
    // CardsVideos,
    // CategorysSlide,
  },
  data() {
    return {
      videos: [],
      categorys: [],
      video: null,
      ruta: '../assets/videos/'
    };
  },
  watch: { 
    '$route' (to) {
      if(to.params.id) {
        console.log('...');
        this.video = this.videos.find(video => video.id === parseInt(this.$route.params.id, 10))
      }
    }
  },
  computed: {
    videosRelacionados() {
      let videosRelacionados = []
      if(this.video) {
        videosRelacionados = store.getters.videos.filter(video => video.idCategory === this.video.idCategory)
      }
      return videosRelacionados
    }
  },
  created() {
    this.categorys = store.getters.categorys
    this.videos = store.getters.videos;
    if(this.$route.params.id) {
      this.video = this.videos.find(video => video.id === parseInt(this.$route.params.id, 10))
      this.video.category = store.getters.getcategoryById(this.video.idCategory)
    }
  },
  methods: {
    getVideoUrl(src) {
      return require(src)
    }
  }
};
</script>