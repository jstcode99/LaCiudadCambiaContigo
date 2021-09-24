<template>
  <div class="top-category section-padding mb-4">
    <div class="row">
      <div class="col-md-12">
        <h6 class="text-dark">Categorias</h6>
        <div
          class="swiper"
          ref="swiper"
        >
          <ul
            ref="tabContainer"
            class="tab-container"
            v-bind:style="{ left: computedLeft, width: computedWidth }"
          >
            <CategorySlide
              v-for="(category, index) in categorys"
              :key="index"
              :category="category"
              @chargeElement="chargeElement($event)"
            />
          </ul>
          <span
            class="prev-slide"
            ref="prevSlide"
            @click="prevSlide('prevSlide')"
            v-bind:style="{ 'left': computedPrev }"
          >
            <b-icon icon="chevron-compact-left"></b-icon>
          </span>
          <span
            class="next-slide"
            ref="nextSlide"
            @click="nextSlide()"
            v-bind:style="{ 'right': computedNex }"
          >
            <b-icon icon="chevron-compact-right"></b-icon>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CategorySlide from './CategorySlide'
export default {
  components: { CategorySlide },
  name: "Categorys",
  props: {
    categorys: Array,
  },
  data() {
    return {
      element: [],
      slider: null,
      swiper: null,
      totalWidth: null,
      elementWidth: null,
      sliderWidth: null,
      newPositionSlideX: 0,
      prevSlideElement: null,
      nextSlideElement: null,
      width: 0,
      left: 0,
      right: 0,
    }
  },
  mounted() {
    this.slider = this.$refs.tabContainer;
    this.prevSlideElement = this.$refs.prevSlide;
    this.nextSlideElement = this.$refs.nextSlide;
    this.swiper = this.$refs.swiper;
    this.totalWidth = this.swiper.clientWidth;
    if(this.element.length) {
      this.element.forEach(element => {
        this.sliderWidth += element.clientWidth + 1;
      });
      if(this.totalWidth > this.sliderWidth) {
        this.width = this.totalWidth
      } else {
        this.width = this.sliderWidth
      }
    }
  },
  computed: {
    computedLeft() {
      return `${this.newPositionSlideX}px`;
    },
    computedWidth() {
      return `${this.width}px`;
    },
    computedNex() {
      return `${this.left}px`;
    },
    computedPrev() {
      return `${this.right}px`;
    }
  },
  methods: {
    chargeElement(element){
      this.element.push(element)
    },
    nextSlide() {
      if(this.newPositionSlideX > (this.totalWidth - this.sliderWidth)){
        this.newPositionSlideX = this.newPositionSlideX - this.$refs.nextSlide.clientWidth;
      }
      this.check()
    },
    prevSlide() {
      if(this.newPositionSlideX >=- this.sliderWidth){
        this.newPositionSlideX = this.newPositionSlideX + this.$refs.prevSlide.clientWidth;
      }
      this.check()
    },
    check() {
      if(this.sliderWidth >= this.totalWidth && this.newPositionSlideX > (this.totalWidth - this.sliderWidth)){
        this.right = 0
      } else {
        this.right = -this.$refs.nextSlide.clientWidth
      }
      if(this.newPositionSlideX < 0){
        this.left = 0
      } else {
        this.left = -this.$refs.prevSlide.clientWidth
      }
    }
  }
};
</script>