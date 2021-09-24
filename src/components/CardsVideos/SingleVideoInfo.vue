<template>
  <div class="single-video-left">
    <div class="single-video-title box mb-3">
      <h2 class="text-dark">
        <strong>{{ video.title }}</strong>
      </h2>
      <p class="mb-0 h6">
        <b-icon
          class="text-dark"
          size="52"
          icon="eye"
        />
        {{ video.vistas }}
        •
        <b-icon
          class="text-dark"
          size="52"
          icon="heart"
        />
        {{ video.likes }}
      </p>
    </div>
    <div class="single-video-author box mb-3">
      <img class="img-fluid" src="img/s4.png" alt="" />
      <p>
        <strong class="text-dark">{{ video.autor.name }}</strong>
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
      <h6 class="text-dark">{{ video.category.title }}</h6>
      <p>Gaming , PS4 Exclusive , Gameplay , 1080p</p>
      <h6 class="text-dark">Descripcion</h6>
      <p>
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