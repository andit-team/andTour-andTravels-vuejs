<template>
  <div>
    <HomeBanner />
    <SearchTourTab />
    <!-- Amazing start-->
    <section id="amazing" v-bind:style="{ 'background-image': `url(${imagepath})` }">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="amz-img wow fadeIn" data-wow-duration="2s">
              <img :src="require('@/assets/img/common-img/amagin.png')" alt="img" />
            </div>
          </div>
          <div class="col-lg-7 col-md-12">
            <div class="left-side-text-ab mar-p mar-o">
              <h6>Amazing Places To Enjony Your Travel</h6>
              <h2>Amazing Plan for <span>our customer</span></h2>
              <p>
                Aliquam erat volutpat. Curabitur tempor nibh quis arcu
                convallis, sed viverra quam sollicitudin. Proin sed augue sed
                neque ultricies condimentum. In ac ultrices lectus.
              </p>
            </div>
            <div class="grun-img shape-3">
              <img :src="require('@/assets/img/common-img/roted.png')" alt="img" />
            </div>
            <div class="all-service-travel">
              <div class="flight-cover">
                <i class="fas fa-plane"></i>
                <p>Flight</p>
              </div>
              <div class="flight-cover">
                <i class="fas fa-ship"></i>
                <p>Ship</p>
              </div>
              <div class="flight-cover">
                <i class="fas fa-car"></i>
                <p>Car</p>
              </div>
              <div class="flight-cover">
                <i class="fas fa-subway"></i>
                <p>Tranis</p>
              </div>
              <div class="flight-cover">
                <i class="fas fa-bed"></i>
                <p>Hotel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Amazing end-->

    <!-- tour start-->
    <section id="tour-des">
      <div class="content-box">
        <h6>Travel Express Provide</h6>
        <h2>Select your <span>Destination</span></h2>
        <p>
          Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed
          viverra quam sollicitudin. Proin sed augue sed neque ultricies
          condimentum.
        </p>
      </div>
      <div class="container">
        <div class="slider-des">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <div class="des-cov">
                <div class="des-img">
                  <a href="#!"><img :src="require('@/assets/img/tour-destanation/d-1.png')" alt="img" /></a>
                </div>
                <div class="des-para">
                  <div class="dayt">
                    <h6><a href="#!">Thailand</a></h6>
                    <p>1day 160$</p>
                  </div>
                  <div class="real-dat-para">
                    <p>
                      Proin nec efficitur nibh. Curabitur posuere aliquam arcu, et
                      euismod felis sagittis sed
                    </p>
                  </div>
                  <div class="des-button-icon">
                    <div class="das-into-btn">
                      <button type="button" class="btn btn-3" v-b-modal.book-now >Book Now</button>
                    </div>
                    <div class="start-icon-des">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            
            <swiper-slide>
              <div class="des-cov">
                <div class="des-img">
                  <a href="#!"><img :src="require('@/assets/img/tour-destanation/d-2.png')" alt="img" /></a>
                </div>
                <div class="des-para">
                  <div class="dayt">
                    <h6><a href="#!">Thailand</a></h6>
                    <p>1day 160$</p>
                  </div>
                  <div class="real-dat-para">
                    <p>
                      Proin nec efficitur nibh. Curabitur posuere aliquam arcu, et
                      euismod felis sagittis sed
                    </p>
                  </div>
                  <div class="des-button-icon">
                    <div class="das-into-btn">
                      <button type="button" class="btn btn-3" v-b-modal.book-now >Book Now</button>
                    </div>
                    <div class="start-icon-des">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            
            <swiper-slide>
              <div class="des-cov">
                <div class="des-img">
                  <a href="#!"><img :src="require('@/assets/img/tour-destanation/d-3.png')" alt="img" /></a>
                </div>
                <div class="des-para">
                  <div class="dayt">
                    <h6><a href="#!">Thailand</a></h6>
                    <p>1day 160$</p>
                  </div>
                  <div class="real-dat-para">
                    <p>
                      Proin nec efficitur nibh. Curabitur posuere aliquam arcu, et
                      euismod felis sagittis sed
                    </p>
                  </div>
                  <div class="des-button-icon">
                    <div class="das-into-btn">
                      <button type="button" class="btn btn-3" v-b-modal.book-now >Book Now</button>
                    </div>
                    <div class="start-icon-des">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            
            <swiper-slide>
              <div class="des-cov">
                <div class="des-img">
                  <a href="#!"><img :src="require('@/assets/img/tour-destanation/d-4.png')" alt="img" /></a>
                </div>
                <div class="des-para">
                  <div class="dayt">
                    <h6><a href="#!">Thailand</a></h6>
                    <p>1day 160$</p>
                  </div>
                  <div class="real-dat-para">
                    <p>
                      Proin nec efficitur nibh. Curabitur posuere aliquam arcu, et
                      euismod felis sagittis sed
                    </p>
                  </div>
                  <div class="des-button-icon">
                    <div class="das-into-btn">
                      <button type="button" class="btn btn-3" v-b-modal.book-now >Book Now</button>
                    </div>
                    <div class="start-icon-des">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            
            <swiper-slide>
              <div class="des-cov">
                <div class="des-img">
                  <a href="#!"><img :src="require('@/assets/img/tour-destanation/d-5.png')" alt="img" /></a>
                </div>
                <div class="des-para">
                  <div class="dayt">
                    <h6><a href="#!">Thailand</a></h6>
                    <p>1day 160$</p>
                  </div>
                  <div class="real-dat-para">
                    <p>
                      Proin nec efficitur nibh. Curabitur posuere aliquam arcu, et
                      euismod felis sagittis sed
                    </p>
                  </div>
                  <div class="des-button-icon">
                    <div class="das-into-btn">
                      <button type="button" class="btn btn-3" v-b-modal.book-now >Book Now</button>
                    </div>
                    <div class="start-icon-des">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            
            <swiper-slide>
              <div class="des-cov">
                <div class="des-img">
                  <a href="#!"><img :src="require('@/assets/img/tour-destanation/d-6.png')" alt="img" /></a>
                </div>
                <div class="des-para">
                  <div class="dayt">
                    <h6><a href="#!">Thailand</a></h6>
                    <p>1day 160$</p>
                  </div>
                  <div class="real-dat-para">
                    <p>
                      Proin nec efficitur nibh. Curabitur posuere aliquam arcu, et
                      euismod felis sagittis sed
                    </p>
                  </div>
                  <div class="des-button-icon">
                    <div class="das-into-btn">
                      <button type="button" class="btn btn-3" v-b-modal.book-now >Book Now</button>
                    </div>
                    <div class="start-icon-des">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>

        <!--Model box-->
        <BookNow />
        <!--Model box-->
      </div>
    </section>
    <!-- tour start-->

    <!-- summery start-->
    <section id="summery" v-bind:style="{ 'background-image': `url(${imagepath1})` }">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="all-space-to wow zoomIn" data-wow-duration="1.5s">
              <div class="summery-cover">
                <h6>Summer Spcial</h6>
                <p><span>25%</span> off</p>
                <h6>Spend The best vaction with us</h6>
                <h2>The nights of Thailand</h2>
              </div>
              <div class="all-spance">
                <span>4days / 5nights</span>
              </div>
              <div class="all-span-btn-com">
                <a href="tour-details.html" class="btn btn-2 mar-top">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- summery end-->

    <!--Our Advantages start-->
    <section id="our-advantages-area">
        <div class="content-box">
            <h6>Why People Choose Us</h6>
            <h2>Our <span>Advantages</span></h2>
            <p>
                Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed
                viverra quam sollicitudin. Proin sed augue sed neque ultricies
                condimentum.
            </p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="adventage-box">
                        <div class="adventage-icon-box">
                            <i class="flaticon-aeroplane"></i>
                        </div>
                        <h6>The Most Reliable Airlines</h6>
                        <p>
                            Proin nec efficitur. Curabitur el puere aliquam arcu, et euismod
                            sed.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="adventage-box">
                        <div class="adventage-icon-box">
                            <i class="flaticon-group"></i>
                        </div>
                        <h6>More Than 2M Visitors Each Month</h6>
                        <p>
                            Proin nec efficitur. Curabitur el puere aliquam arcu, et euismod
                            sed.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="adventage-box">
                        <div class="adventage-icon-box">
                            <i class="flaticon-search"></i>
                        </div>
                        <h6>Easy and Friendly Search Options</h6>
                        <p>
                            Proin nec efficitur. Curabitur el puere aliquam arcu, et euismod
                            sed.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="adventage-box">
                        <div class="adventage-icon-box">
                            <i class="flaticon-booking"></i>
                        </div>
                        <h6>Fast and Reliable Ticket Booking</h6>
                        <p>
                            Proin nec efficitur. Curabitur el puere aliquam arcu, et euismod
                            sed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Our Advantages End-->

    <!-- testimonial-top start-->
    <section id="home-testimonial-top" v-bind:style="{ 'background-image': `url(${imagepath2})` }">
      <div class="content-box">
        <h6 class="color-1">Motion</h6>
        <h2 class="color-2">Watch Our <span> Video Tour</span></h2>
      </div>
    </section>
    <!-- testimonial-top end-->

    <!-- testimonial start-->
    <section id="home-testimonial">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="vt-img">
              <img :src="require('@/assets/img/common-img/video.png')" alt="img" />
            </div>
            <div class="video-play-test">
              <a href="https://www.youtube.com/watch?v=V43FgG7kE00" class="video-play-btn video-link venobox"
                data-autoplay="true" data-vbtype="video"><i class="fas fa-play"></i></a>
            </div>
          </div>
        </div>


      </div>
    </section>
    <!-- testimonial end-->

    <!-- testimonial  area start-->
    <section id="testimonial-1" class="pt-0">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="testmoinal-area-four-text">
                        <div class="text-test-heading-area">
                            <h6>Lots of Smiles</h6>
                            <h2>More Than 960+ People <span>Are Happy With Us</span>.</h2>
                        </div>
                        <div class="testimonial-four-details">
                            <div class="testimonial-four-item">
                                <div class="quote-area">
                                    <i class="flaticon-quotation"></i>
                                </div>
                                <p class="t-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula
                                    volutpat porta.
                                    Cras in vulputate est, quis posuere odio. Cras pulvinar condimentum tortor eu
                                    faucibus. Vivamus vitae nunc odio. Suspendisse ut nibh quis orci auctor sodales a
                                    quis nulla. In non justo tortor.</p>
                                <h6 class="t-name">Carry Bradshow</h6>
                                <div class="rating-star t-star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="client-img-area">
                        <ul>
                            <li class="client-grapper"></li>
                            <li>
                                <img :src="require('@/assets/img/home-04/client/1.png')" alt="img" class="t-img"
                                    data-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula volutpat porta Cras in vulputate est, quis posuere odio. Cras pulvinar condimentum tortor eu faucibus. amus vitae nunc odio. Suspendisse ut nibh quis orci auctor sodales aquis nulla. In non justo tortor"
                                    data-name="Carry Bradshow" data-star="4">
                            </li>
                            <li>
                                <img :src="require('@/assets/img/home-04/client/2.png')" alt="img" class="t-img"
                                    data-text="Ut vehicula volutpat porta Cras in vulputate est, quis posuere odio. Cras pulvinar condimentum tortor eu faucibus. amus vitae nunc odio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut nibh quis orci auctor sodales aquis nulla. In non justo tortor"
                                    data-name="Carry Bradshow" data-star="4">
                            </li>
                            <li class="t-img">
                                <img :src="require('@/assets/img/home-04/client/3.png')" alt="img" class="t-img"
                                    data-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula volutpat porta Cras in vulputate est, quis posuere odio. Cras pulvinar condimentum tortor eu faucibus. amus vitae nunc odio. Suspendisse ut nibh quis orci auctor sodales aquis nulla. In non justo tortor"
                                    data-name="Hedayet Ali" data-star="5">
                            </li>
                            <li>
                                <img :src="require('@/assets/img/home-04/client/4.png')" alt="img" class="t-img"
                                    data-text="Ut vehicula volutpat porta Cras in vulputate est, quis posuere odio. Cras pulvinar condimentum tortor eu faucibus. amus vitae nunc odio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut nibh quis orci auctor sodales aquis nulla. In non justo tortor"
                                    data-name="Shovon das" data-star="5">
                            </li>
                            <li>
                                <img :src="require('@/assets/img/home-04/client/5.png')" alt="img" class="t-img"
                                    data-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula volutpat porta Cras in vulputate est, quis posuere odio. Cras pulvinar condimentum tortor eu faucibus. amus vitae nunc odio. Suspendisse ut nibh quis orci auctor sodales aquis nulla. In non justo tortor"
                                    data-name="Sudiptta Mondal" data-star="3">
                            </li>
                            <li class="client-grapper"></li>
                            <li>
                                <img :src="require('@/assets/img/home-04/client/6.png')" alt="img" class="t-img"
                                    data-text="Ut vehicula volutpat porta Cras in vulputate est, quis posuere odio. Cras pulvinar condimentum tortor eu faucibus. amus vitae nunc odio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut nibh quis orci auctor sodales aquis nulla. In non justo tortor"
                                    data-name="Shariful Khan" data-star="4">
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- testimonial end-->

    <!-- contact start-->
    <section id="home-contact">
      <div class="map-inner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6962663570607!2d89.56355961427838!3d22.813715829827952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901efac79b59%3A0x5be01a1bc0dc7eba!2sAnd+IT!5e0!3m2!1sen!2sbd!4v1557901943656!5m2!1sen!2sbd"
          width="600" height="450" allowfullscreen=""></iframe>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12 col-12">
            <div class="contact-cover">
              <div class="contact-heading">
                <h2>Do You Have Any Questions?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vehicula volutpat porta. Cras in vulputate est
                </p>
              </div>
              <div class="info-office">
                <div class="phone-deta">
                  <div class="phone-info">
                    <i class="flaticon-telephone"></i>
                  </div>
                  <div class="sams">
                    <p>+124 (2486) 444</p>
                    <p>+133 (4444) 878</p>
                  </div>
                </div>
                <div class="email-deta">
                  <div class="phone-info">
                    <i class="flaticon-paper-plane"></i>
                  </div>
                  <div class="sams">
                    <p>mail@example.com</p>
                    <p>info@mail.com</p>
                  </div>
                </div>
              </div>
              <div class="contact-form">
                <form action="#">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Name:" required />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Email:" required />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group nessage-text">
                        <textarea name="message" id="message" rows="6" class="form-control"
                          placeholder="Enter Your Message:" required></textarea>
                      </div>
                      <div class="contact-sub-btn">
                        <a href="#!" class="btn submit contactsuccess">Submit</a>
                      </div>
                      <div class="sending-gif" style="display: none;">
                        <img src="assets/img/loading.gif" alt="send-gif" />
                      </div>
                    </div>
                  </div>
                </form>
                <div class="success-msg alert alert-success" style="display: none;">
                  <strong>Success!</strong> Email Send Succesfully.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact end-->

  </div>
</template>

<script>
export default {
  data() {
    return {
      imagepath: require('@/assets/img/common-img/about-bg.png'),
      imagepath1: require('@/assets/img/common-img/summer.png'),
      imagepath2: require('@/assets/img/common-img/testmoinal-bg.png'),

      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
