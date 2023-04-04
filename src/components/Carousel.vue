<template>
  <div class="carousel">
    <carousel :perPageCustom="[[0, 1], [480, 2], [768, 3], [992, 4]]">
      <slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.caption" />
        <div class="caption">{{ slide.caption }}</div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slides: [
        {
          image: 'https://via.placeholder.com/500x250',
          caption: 'Slide 1',
        },
        {
          image: 'https://via.placeholder.com/500x250',
          caption: 'Slide 2',
        },
        {
          image: 'https://via.placeholder.com/500x250',
          caption: 'Slide 3',
        },
      ],
    };
  },
};
</script>

<style>
.carousel {
  width: 100%;
  height: 100%;
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  font-size: 20px;
}
</style>
