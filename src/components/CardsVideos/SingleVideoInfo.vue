<template>
  <div class="single-video-left">
    <div class="single-video-title box mb-3">
      <h2 class="text-light">
        <strong>{{ video.title }}</strong>
      </h2>
      <p class="mb-0 h6">
        {{ video.vistas }}
        visitas
        •
        <b-icon
          class="text-light"
          size="52"
          icon="heart"
        />
        {{ video.likes }}
      </p>
    </div>
    <div class="single-video-author box mb-3">
      <img class="img-fluid" :src="video.autor.avatar" alt="" />
      <p>
        <strong class="text-light">{{ video.autor.name }}</strong>
        <span
          title=""
          data-placement="top"
          data-toggle="tooltip"
          data-original-title="Verified"
          ><i class="fas fa-check-circle text-success"></i
        ></span>
      </p>
      <small>Publicado {{ video.date }}</small>
    </div>
    <div class="single-video-info-content box mb-3">
      <h6 class="text-light">Categoria</h6>
      <h6 class="text-primary">{{ video.category.title }}</h6>
      <h6 class="text-light">Descripcion</h6>
      <p class="text-light">
        {{ video.description }}
      </p>
      <!-- <h6>Tags :</h6>
      <p class="tags mb-0">
        <span><a href="#">Uncharted 4</a></span>
        <span><a href="#">Playstation 4</a></span>
        <span><a href="#">Gameplay</a></span>
        <span><a href="#">1080P</a></span>
        <span><a href="#">ps4Share</a></span>
        <span><a href="#">+ 6</a></span>
      </p> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleVideoInfo",
  components: {
    // CardVideo,
    // CardsVideos,
    // CategorysSlide,
  },
  props: {
    video: Object,
  },
};
</script>