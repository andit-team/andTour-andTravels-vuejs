
<template>
    <!-- banner start-->
  <section id="banner-home" v-bind:style="{ 'background-image': `url(${imagepath})` }">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-10 col-sm-12 col-12">
          <div class="banner-text-home wow fadeInUp" data-wow-duration="2s">
            <h6>WELCOME TO</h6>
            <h1>Discover Amazing Places of the world</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              tempor invidunt ut
            </p>
            <div class="button-common">
              <a href="#!" class="btn btn-1">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-2 col-sm-12 col-12">
          <div class="video-play-banner">
            <a href="https://www.youtube.com/watch?v=V43FgG7kE00" class="video-play-btn video-link venobox"
              data-autoplay="true" data-vbtype="video"><i class="fas fa-play"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  banner end-->
</template>

<script>
export default {
  data() {
    return {
      imagepath: require('@/assets/img/common-img/banner-img.png'),
    }
  }
}
</script>

<style>

</style>