<template>
  <!-- Ab start-->
  <section id="ab-home" v-bind:style="{ 'background-image': `url(${imagepath})` }">
    <div class="container">
      <div class="heading">
        <h2>ab-section</h2>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12 main-com">
          <b-card no-body>
          <b-tabs card>
            <b-tab title="Search Tour" active>
              <b-card-text>
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <div class="select-box">
                        <span class="sec-po"><i class="fas fa-map-marker-alt"></i></span>
                        <select>
                          <option value="0"> Destination</option>
                          <option value="1">Audi</option>
                          <option value="2">BMW</option>
                          <option value="3">Citroen</option>
                        </select>
                        <i class="fas fa-angle-down map-io"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <div class="booking-info">
                        <b-form-datepicker
                        placeholder="Checkin"
                        id="datepicker-dateformat2"
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        locale="en"
                        class="form-control"
                        ></b-form-datepicker>
                        <i class="fas fa-angle-down map-io"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <b-form-datepicker
                      placeholder="Checkin"
                      id="datepicker-dateformat3"
                      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                      locale="en"
                      class="form-control"
                      ></b-form-datepicker>
                      <i class="fas fa-angle-down map-io"></i>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <div class="select-box">
                        <span class="sec-po"><i class="fas fa-bed"></i></span>
                        <select>
                          <option value="0"> Hotel</option>
                          <option value="1">Audi</option>
                          <option value="2">BMW</option>
                          <option value="3">Citroen</option>
                        </select>
                        <i class="fas fa-angle-down map-io"></i>
                      </div>
                    </div>
                  </div>

                  </div>
              </b-card-text>
            </b-tab>
            <b-tab title="Hotel">
              <b-card-text>
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <div class="select-box">
                        <span class="sec-po"><i class="fas fa-map-marker-alt"></i></span>
                        <select>
                          <option value="0"> Destination</option>
                          <option value="1">Audi</option>
                          <option value="2">BMW</option>
                          <option value="3">Citroen</option>
                        </select>
                        <i class="fas fa-angle-down map-io"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <div class="booking-info">
                        <b-form-datepicker
                        placeholder="Checkin"
                        id="datepicker-dateformat2"
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        locale="en"
                        class="form-control"
                        ></b-form-datepicker>
                        <i class="fas fa-angle-down map-io"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <b-form-datepicker
                      placeholder="Checkin"
                      id="datepicker-dateformat3"
                      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                      locale="en"
                      class="form-control"
                      ></b-form-datepicker>
                      <i class="fas fa-angle-down map-io"></i>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <div class="select-box">
                        <span class="sec-po"><i class="fas fa-bed"></i></span>
                        <select>
                          <option value="0"> Hotel</option>
                          <option value="1">Audi</option>
                          <option value="2">BMW</option>
                          <option value="3">Citroen</option>
                        </select>
                        <i class="fas fa-angle-down map-io"></i>
                      </div>
                    </div>
                  </div>

                  </div>
              </b-card-text>
            </b-tab>
            <b-tab title="Flights">
              <b-card-text>
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <div class="select-box">
                        <span class="sec-po"><i class="fas fa-map-marker-alt"></i></span>
                        <select>
                          <option value="0"> Destination</option>
                          <option value="1">Audi</option>
                          <option value="2">BMW</option>
                          <option value="3">Citroen</option>
                        </select>
                        <i class="fas fa-angle-down map-io"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <div class="booking-info">
                        <b-form-datepicker
                        placeholder="Checkin"
                        id="datepicker-dateformat2"
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        locale="en"
                        class="form-control"
                        ></b-form-datepicker>
                        <i class="fas fa-angle-down map-io"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <b-form-datepicker
                      placeholder="Checkin"
                      id="datepicker-dateformat3"
                      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                      locale="en"
                      class="form-control"
                      ></b-form-datepicker>
                      <i class="fas fa-angle-down map-io"></i>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <div class="select-box">
                        <span class="sec-po"><i class="fas fa-bed"></i></span>
                        <select>
                          <option value="0"> Hotel</option>
                          <option value="1">Audi</option>
                          <option value="2">BMW</option>
                          <option value="3">Citroen</option>
                        </select>
                        <i class="fas fa-angle-down map-io"></i>
                      </div>
                    </div>
                  </div>

                  </div>
              </b-card-text>
            </b-tab>
            <b-tab title="Buses">
              <b-card-text>
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <div class="select-box">
                        <span class="sec-po"><i class="fas fa-map-marker-alt"></i></span>
                        <select>
                          <option value="0"> Destination</option>
                          <option value="1">Audi</option>
                          <option value="2">BMW</option>
                          <option value="3">Citroen</option>
                        </select>
                        <i class="fas fa-angle-down map-io"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <div class="booking-info">
                        <b-form-datepicker
                        placeholder="Checkin"
                        id="datepicker-dateformat2"
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        locale="en"
                        class="form-control"
                        ></b-form-datepicker>
                        <i class="fas fa-angle-down map-io"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <b-form-datepicker
                      placeholder="Checkin"
                      id="datepicker-dateformat3"
                      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                      locale="en"
                      class="form-control"
                      ></b-form-datepicker>
                      <i class="fas fa-angle-down map-io"></i>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="booking-info">
                      <div class="select-box">
                        <span class="sec-po"><i class="fas fa-bed"></i></span>
                        <select>
                          <option value="0"> Hotel</option>
                          <option value="1">Audi</option>
                          <option value="2">BMW</option>
                          <option value="3">Citroen</option>
                        </select>
                        <i class="fas fa-angle-down map-io"></i>
                      </div>
                    </div>
                  </div>

                  </div>
              </b-card-text>
            </b-tab>
            <div class="col-lg-12">
              <div class="book-ctn">
                <a href="#!" class="btn btn-2 pad">Search Now</a>
              </div>
            </div>
          </b-tabs>
        </b-card>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="left-side-text-ab max-live">
            <h6>Amazing Places To Enjony Your Travel</h6>
            <h2>About Our <span>A2Z</span> Travel</h2>
            <p>
              Aliquam erat volutpat. Curabitur tempor nibh quis arcu
              convallis, sed viverra quam sollicitudin. Proin sed augue sed
              neque ultricies condimentum. In ac ultrices lectus.
            </p>
            <p>
              Nullam ex elit, vestibulum ut urna non, tincidunt condimentum
              sem. Sed enim tortor, accumsan at consequat et, tempus sit ame
            </p>
            <a href="#!" class="btn btn-2 mar-top">Search Now</a>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">

          <div class="swiper" v-swiper="swiperOption">
            <div class="swiper-wrapper">
            
             <div class="swiper-slide"><img :src="require('@/assets/img/common-img/about-img.png')" alt="img" /></div>
             <div class="swiper-slide"><img :src="require('@/assets/img/common-img/about-img.png')" alt="img" /></div>
             <div class="swiper-slide"><img :src="require('@/assets/img/common-img/about-img.png')" alt="img" /></div>
             <div class="swiper-slide"><img :src="require('@/assets/img/common-img/about-img.png')" alt="img" /></div>
             <div class="swiper-slide"><img :src="require('@/assets/img/common-img/about-img.png')" alt="img" /></div>
             <div class="swiper-slide"><img :src="require('@/assets/img/common-img/about-img.png')" alt="img" /></div>


            </div>

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
              <!-- <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div> -->

              <!-- <div class="swiper-button-prev testi_prev" slot="button-prev"></div>
              <div class="swiper-button-next testi_next" slot="button-next"></div> -->

              <!-- <div class="swiper-button-prev testi_prev" slot="button-prev"><i class="fas fa-angle-left"></i></div>
              <div class="swiper-button-next testi_next" slot="button-next"><i class="fas fa-angle-right"></i></div> -->
          </div>

        </div>
      </div>
    </div>
  </section>
  <!-- Ab end-->
</template>

<script>
export default {
  data() {
    return {
      imagepath: require('@/assets/img/common-img/map.png'),
      swiperOption: {
        slidesPerView: 1,
        //  pagination: '.swiper-pagination',
        // navigation: {
        //   nextEl: '.testi_next',
        //   prevEl: '.testi_prev'
        // },
        
        navigation: {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
        },
        //  navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        //   },
        
        //  nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        spaceBetween: 20,
        freeMode: false,
        breakpoints: {
          1199: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      },
    }
  },
}
</script>

<style>
.swiper-button-prev, .swiper-button-next {
    position: absolute;
    top: 48%!important;
}


.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
	pointer-events: auto;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next, .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
	background-image: none;
}
.swiper-button-next i, .swiper-button-prev i {
	font-size: 19px;
	color: var(--heading-color);
}
.swiper-button-prev, .swiper-button-next {
	width: 30px;
	height: 30px;
	background-color: #fff;
}
</style>