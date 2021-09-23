<template>
  <div
    class="video-card"
    :class="classNames"
  >
    <div class="video-card-image">
      <a class="play-icon" href="#">
        <b-icon icon="play-fill"></b-icon>
      </a>
      <a href="#">
        <img :src="video.url" width="319px" :height="height"/>
      </a>
      <div class="time">{{ video.time }}h</div>
    </div>
    <div class="video-card-body" v-if="!onlyVideo">
      <div class="video-title">
        <a :href="`link${video.title}`">
          {{ video.title }}
        </a>
      </div>
      <div class="video-page text-success">
        {{ this.category.title }}
        <a
          :title="video.title"
          data-placement="top"
          data-toggle="tooltip"
          :href="`link${video.title}`"
          data-original-title="Verified"
        >
          <i class="fas fa-check-circle text-success"></i>
        </a>
      </div>
      <div class="video-view">
        10.2M Vistas • 1.8M &nbsp;<i class="far fa-heart"></i>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
export default {
  name: "CardVideo",
  props: {
    onlyVideo: Boolean,
    classNames: String,
    height: String,
    video: Object,
  },
  data() {
    return {
      category: null,
    };
  },
  created() {
    this.category = store.getters.getcategoryById(this.video.idCategory);
  },
}
</script>