<template>
  <div class="container-fluid pb-0">
    <div class="video-block-right-list section-padding">
      <div class="row mb-4">
        <b-col
          class="col-md-8"
          align-self="baseline"
        >
          <div class="single-video">
            <iframe width="100%" height="615" src="https://www.youtube-nocookie.com/embed/8LWZSGNjuF0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <SingleVideoInfo />
        </b-col>
        <b-col
          class="col-md-4"
          align-self="stretch"
        >
          <div class="video-slider-right-list">
            <h6 class="m-2 text-dark">Videos relacionado</h6>
            <CardVideo
              v-for="(video, index) in videos"
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
    };
  },
  created() {
    this.videos = store.getters.videos;
    this.categorys = store.getters.categorys
  },
};
</script>