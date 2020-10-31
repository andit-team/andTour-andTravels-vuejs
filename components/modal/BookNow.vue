<template>
  <div>
    <b-modal
      id="book-now"
      ref="modal"
      title=""
      hide-footer
    >
      <div class="model-details">
        <h5>Travel Booking Form</h5>
        <div class="mdel-form">
          <form action="#">
            <div class="form-group">
              <label for="name">First name</label>
              <input type="text" class="form-control" placeholder="First Name" id="name" />
            </div>
            <div class="form-group">
              <label for="last-name">Last Name</label>
              <input type="text" class="form-control" placeholder="Last Name" id="last-name" />
            </div>
            <div class="form-group">
              <label for="last-name">Email</label>
              <input type="text" class="form-control" placeholder="Email" id="email" />
            </div>
            <div class="form-group">
              <label for="phone">Last Name</label>
              <input type="text" class="form-control" placeholder="Phone" id="phone" />
            </div>
            <div class="form-group mainm-sel">
              <label for="text" id="form-control">Guest:</label>
              <div class="select-box">
                <span class="sec-po"></span>
                <select id="text">
                  <option value="0">Number of Guest</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="3">4</option>
                </select>
                <div class="serv-ivmf-2">
                  <i class="fas fa-angle-down"></i>
                </div>
              </div>
            </div>
            <div class="travel-tyepe">
              <div class="flex-type">
                <label for="text">Total Price:</label>
              </div>
              <div class="check-box-many">
                <div class="total-price">
                  <h3>$150</h3>
                </div>
              </div>
            </div>

            <div class="sunb-btn-mod">
              <a href="#!" class="btn btn-3 widet-2">BOOKING NOW</a>
            </div>
          </form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
</style>