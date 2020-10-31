<template>
  <div>
    <b-modal
      id="rentalFilterSearchModal"
      class="rental-page-filter-modal"
      ref="modal"
      title="ফিল্টার"
      hide-footer
    >

      <div class="rides-left-search-filters">
          <form>

              <!-- Rides Comfort Checkbox Start -->
              <div class="ride-left-single-filter">
                <p>গাড়ির ধরণ</p>
                <div class="rental-page-modal-custom-wrap rental-page-car-type-wrap d-flex">
                    <div class="ride-left-luggage-box">
                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="luggageCheck" name="luggage">
                            <label class="custom-control-label" for="luggageCheck">
                                <i class="fas fa-truck-moving"></i>
                                ভ্যান
                            </label>
                        </div>
                    </div>
                    <div class="ride-left-luggage-box">
                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="luggageCheck2" name="luggage">
                            <label class="custom-control-label" for="luggageCheck2">
                                <i class="fas fa-truck-pickup"></i>
                                মাঝারি
                            </label>
                        </div>
                    </div>
                    <div class="ride-left-luggage-box">
                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="luggageCheck3" name="luggage">
                            <label class="custom-control-label" for="luggageCheck3">
                                <i class="fas fa-bus"></i>
                                পিকাপ
                            </label>
                        </div>
                    </div>
                    <div class="ride-left-luggage-box">
                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="luggageCheck4" name="luggage">
                            <label class="custom-control-label" for="luggageCheck4">
                                <i class="fas fa-car"></i>
                                মিনিবাস
                            </label>
                        </div>
                    </div>
                    <div class="ride-left-luggage-box">
                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="luggageCheck5" name="luggage">
                            <label class="custom-control-label" for="luggageCheck5">
                                <i class="fas fa-car-side"></i>
                                ট্যাক্সি
                            </label>
                        </div>
                    </div>
                    <div class="ride-left-luggage-box">
                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="luggageCheck6" name="luggage">
                            <label class="custom-control-label" for="luggageCheck6">
                                <i class="fas fa-taxi"></i>
                                বড়
                            </label>
                        </div>
                    </div>
                    <div class="ride-left-luggage-box">
                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="luggageCheck7" name="luggage">
                            <label class="custom-control-label" for="luggageCheck7">
                                <i class="fas fa-shuttle-van"></i>
                                মাইক্রোবাস
                            </label>
                        </div>
                    </div>
                </div>
              </div>
              <!-- Rides Comfort Checkbox End -->

              <!-- Rides Comfort Checkbox Start -->
              <div class="ride-left-single-filter">
                <p>জ্বালানীর ধরণ</p>
                <div class="rental-page-modal-custom-wrap d-flex">
                    <div class="custom-control custom-checkbox mb-3 mr-4">
                        <input type="checkbox" class="custom-control-input" id="fuelCheck1" name="comfort_routes">
                        <label class="custom-control-label" for="fuelCheck1">পেট্রোল</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3 mr-4">
                        <input type="checkbox" class="custom-control-input" id="fuelCheck2" name="comfort_routes">
                        <label class="custom-control-label" for="fuelCheck2">ডিজেল</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3 mr-4">
                        <input type="checkbox" class="custom-control-input" id="fuelCheck3" name="comfort_routes">
                        <label class="custom-control-label" for="fuelCheck3">ইলেক্ট্রিক</label>
                    </div>
                </div>
              </div>
              <!-- Rides Comfort Checkbox End -->

              <!-- Rides Comfort Checkbox Start -->
              <div class="ride-left-single-filter">
                <p>এসি সার্ভিস</p>
                <div class="rental-page-modal-custom-wrap d-flex">
                    <div class="custom-control custom-checkbox mb-3 mr-4">
                        <input type="checkbox" class="custom-control-input" id="AC" name="AC">
                        <label class="custom-control-label" for="AC">এসি</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3 mr-4">
                        <input type="checkbox" class="custom-control-input" id="nonAC" name="nonAC">
                        <label class="custom-control-label" for="nonAC">নন-এসি</label>
                    </div>
                </div>
              </div>
              <!-- Rides Comfort Checkbox End -->

              <!-- Rental Modal Seats Checkbox Start -->
              <div class="ride-left-single-filter">
                <p>আসন সংখ্যা</p>

                <div class="rental-page-modal-custom-wrap rental-modal-seat-select-wrap d-flex">
                    <select name="rental-filters2" id="rental-filters2">
                        <option value="1+">1+</option>
                        <option value="2+">2+</option>
                        <option value="3+">3+</option>
                        <option value="4+">4+</option>
                        <option value="5+">5+</option>
                        <option value="6+">6+</option>
                        <option value="7+">7+</option>
                        <option value="8+">8+</option>
                    </select>
                </div>
              </div>
              <!-- Rental Modal Seats Checkbox End -->
              
              <div class="modal-footer d-flex justify-content-between">
                <button type="reset" class="rental-modal-clear-btn">Clear filters</button>
                <button type="button" class="theme-button">আপডেট সার্চ</button>
              </div>
          </form>

      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
  
  }
</script>

<style>
#rentalFilterSearchModal___BV_modal_body_ {
	padding: 0;
}
</style>