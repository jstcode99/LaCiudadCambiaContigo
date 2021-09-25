<template>
  <div class="video-block section-padding">
    <div class="row">
      <div class="col-md-12">
        <div class="main-title">
          <h6 class="text-light">Videos</h6>
        </div>
      </div>
      <div
        class="col-xl-3 col-sm-6 mb-3"
        v-for="(video, index) in videos"
        :key="index"
      >
        <CardVideo
          height="168px"
          :video="video"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CardVideo from './CardVideo'
export default {
  components: { CardVideo },
  name: "CardVideos",
  props: {
    videos: Array,
  },
};
</script>