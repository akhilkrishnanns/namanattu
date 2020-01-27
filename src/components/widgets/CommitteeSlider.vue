<template>
  <div class="committee-slider">
    <div class="owl-carousel">

      <div class="item">
        <img src="http://assets.daddario.com/core_landing_tst/images/headstock_tuner.png" alt="Tuner Image">
      </div>
      <div class="item">
        <img src="http://assets.daddario.com/core_landing_tst/images/headstock_tuner.png" alt="Tuner Image">
      </div>
      <div class="item">
        <img src="http://assets.daddario.com/core_landing_tst/images/headstock_tuner.png" alt="Tuner Image">
      </div>
      <div class="item">
        <img src="http://assets.daddario.com/core_landing_tst/images/headstock_tuner.png" alt="Tuner Image">
      </div>
      <div class="item">
        <img src="http://assets.daddario.com/core_landing_tst/images/headstock_tuner.png" alt="Tuner Image">
      </div>

    </div>
  </div>
</template>
<script>
export default {
  mounted(){
    this.mountSlider();
  },
  methods: {
    mountSlider() {
      $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        items: 3,
        autoPlay: 3000,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigation: true,
        navigationText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
        ]
      });
    });
    }
  }
};
</script>
<style>
.committee-slider {
      position: relative;
      font-family: font-awesome;
    }
    .owl-buttons {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .owl-prev,
    .owl-next {
      position: absolute;
    }
    i.fa {
      cursor: pointer;
      position: absolute;
      font-size: 60px;
      padding-top: 8px;
      height: 64px;
      width: 72px;
      color: rgba(0, 0, 0, .5);
      background: rgba(0, 75, 222, .7);
      border-radius: 50%;
      display: table-cell;
    }
    .owl-prev,
    .owl-next {
      background-color: transparent;
      border: 0px none transparent;
      width: 0px;
      height: 0px;
    }
    .owl-perv {
      left: 0;
    }
    .owl-next {
      right: 72px;
    }
    .item {
      float: left;
    }
</style>