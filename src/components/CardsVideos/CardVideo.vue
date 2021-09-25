<template>
  <div
    class="video-card"
    :class="classNames"
  >
    <div class="video-card-image">
      <a class="play-icon" href="#">
        <b-icon icon="play-fill"></b-icon>
      </a>
      <a :href="`/video/${video.id}`">
        <video class="video" width="100%" height="100%">
          <source v-if="video.src" :src="`${video.src}#t=1,10`" type="video/mp4">
        </video>
      </a>
      <div class="time">{{ video.time }}</div>
    </div>
    <div class="video-card-body" v-if="!onlyVideo">
      <div class="video-title">
        <a :href="`/video/${video.id}`">
          {{ video.title }}
        </a>
      </div>
      <div class="video-page text-primary" @click="goCategoy">
        {{ this.category.title }}
          <b-icon icon="check"></b-icon>
      </div>
      <div class="video-view">
        {{ video.vistas }} vistas • {{ video.likes }} &nbsp; <b-icon icon="heart"></b-icon>
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
  methods: {
    getVideoUrl(src) {
      return require(src)
    },
    goVideo() {
      this.$router.push({ name: 'video', params: { id: this.video.id } }).catch(()=>{});
    },
    goCategoy() {
      this.$router.push({ name: 'home', params: { category: this.video.idCategory } }).catch(()=>{});
    }
  }
}
</script>