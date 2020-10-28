<template>
  <!-- Ab start-->
  <section id="ab-home">
    <div class="container">
      <div class="heading">
        <h2>ab-section</h2>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12 main-com">
          <nav>
            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                aria-controls="nav-home" aria-selected="true">Search Tour</a>
              <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                aria-controls="nav-profile" aria-selected="false">
                <i class="fas fa-city amr"></i> Hotel
              </a>
            </div>
          </nav>
          <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
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
                      <div id="datepicker-2" class="input-group date" data-date-format="mm-dd-yyyy">
                        <input class="form-control" type="text" placeholder="Check In" />
                        <span class="input-group-addon sec-po"><i class="far fa-calendar-alt"></i></span>
                      </div>
                      <i class="fas fa-angle-down map-io"></i>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div class="booking-info">
                    <div id="datepicker" class="input-group date" data-date-format="mm-dd-yyyy">
                      <input class="form-control" type="text" placeholder="Check Out" />
                      <span class="input-group-addon sec-po"><i class="far fa-calendar-alt"></i></span>
                    </div>
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

                <div class="col-lg-12">
                  <div class="book-ctn">
                    <a href="#!" class="btn btn-2 pad">Search Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
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
                      <div id="datepicker-3" class="input-group date" data-date-format="mm-dd-yyyy">
                        <input class="form-control" type="text" placeholder="Check In" />
                        <span class="input-group-addon sec-po"><i class="far fa-calendar-alt"></i></span>
                      </div>
                      <i class="fas fa-angle-down map-io"></i>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div class="booking-info">
                    <div id="datepicker-4" class="input-group date" data-date-format="mm-dd-yyyy">
                      <input class="form-control" type="text" placeholder="Check Out" />
                      <span class="input-group-addon sec-po"><i class="far fa-calendar-alt"></i></span>
                    </div>
                    <i class="fas fa-angle-down map-io"></i>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div class="booking-info">
                    <div class="select-box">
                      <span class="sec-po"><i class="fas fa-bed"></i></span>
                      <select class="marder">
                        <option value="0"> Hotel</option>
                        <option value="1">Audi</option>
                        <option value="2">BMW</option>
                        <option value="3">Citroen</option>
                      </select>
                      <i class="fas fa-angle-down map-io"></i>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div class="all-class">
                    <div class="bugest-info">
                      <span>
                        Budget Now:
                      </span>
                    </div>
                    <div class="buget">
                      <span class="ranger-1"></span>
                      <span class="ranger-2"></span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="book-ctn">
                    <a href="#!" class="btn btn-2 pad">Search Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="valedoter">
            <h2>Home</h2>
          </div>
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
          <div class="ab-slider">
            <div class="slider-main-ab owl-carousel owl-theme">
              <img src="assets/img/common-img/about-img.png" alt="img" />
              <img src="assets/img/common-img/about-img.png" alt="img" />
              <img src="assets/img/common-img/about-img.png" alt="img" />
              <img src="assets/img/common-img/about-img.png" alt="img" />
              <img src="assets/img/common-img/about-img.png" alt="img" />
              <img src="assets/img/common-img/about-img.png" alt="img" />
              <img src="assets/img/common-img/about-img.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Ab end-->
</template>

<script>
export default {

}
</script>

<style>

</style>