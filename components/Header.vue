<template>
  <div>
    <!-- top header-->
    <div class="header-most-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-8 col-sm-8 col-12">
            <div class="main-flex-top">
              <div class="email sel d-flex">
                <div class="main-email-text d-flex">
                  <i class="fas fa-envelope"></i>
                  <p>infp@a2z.com</p>
                </div>
                <div class="main-loc-text d-flex">
                  <i class="fas fa-map-marker-alt"></i>
                  <p>78 5th Ave, New York, Ny 10011, USA</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-4 col-sm-4 col-12">
            <div class="login-area">
              <div class="seclict-area">
                <img :src="require('@/assets/img/common-img/flg.png')" alt="img" />
                <select name="cars">
                  <option value="volvo">USA</option>
                  <option value="saab">BAN</option>
                  <option value="fiat">BAN</option>
                  <option value="audi">BAN</option>
                </select>
                <i class="fas fa-angle-down"></i>
              </div>
              <div class="user-log">
                <i class="far fa-user-circle"></i>
                <a href="#">Sign In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- top header end-->

    <!-- navber start-->
    <!-- <header class="site-header header-style-one">
      <div class="site-navigation style-one">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12">
              <div class="navbar navbar-expand-lg navigation-area">
                <div class="site-branding">
                  <a class="site-logo" href="index.html">
                    <img :src="require('@/assets/img/logo.png')" alt="Site-logo" />
                  </a>
                </div>
                <div class="mainmenu-area">
                  <b-navbar toggleable="lg" class="menu">

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                      <b-navbar-nav id="nav">
                        <b-nav-item to="/">Home</b-nav-item>

                        <b-nav-item-dropdown text="Trip Package" right>
                          <b-dropdown-item to="#">Tour-Packages</b-dropdown-item>
                          <b-dropdown-item to="#">Tour-Details</b-dropdown-item>
                        </b-nav-item-dropdown>
                        
                        <b-nav-item to="#">Service</b-nav-item>
                        <b-nav-item to="#">About us</b-nav-item>
                        <b-nav-item to="#">List your place</b-nav-item>
                        <b-nav-item to="#">Contact</b-nav-item>
                      </b-navbar-nav>
                    </b-collapse>

                  </b-navbar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> -->
    <!-- navber end-->

    <header class="site-header header-style-one">
      <!-- Navigation -->
      <b-navbar toggleable="lg" type="dark" id="mainNav" class="menu">
        <b-container>
      
          <b-navbar-brand to="/">
            <b-img :src='"@/assets/img/logo.png"' class="img-fluid" alt="logo" />
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse">
            <template v-slot:default="{ expanded }">
              <b-icon v-if="expanded" icon="x"></b-icon>
              <b-icon v-else icon="list"></b-icon>
            </template>
          </b-navbar-toggle>

          <!-- Right aligned nav items -->
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav id="nav" class="ml-auto">
              <b-nav-item to="/">Home</b-nav-item>

              <b-nav-item-dropdown text="Trip Package" right>
                <b-dropdown-item to="#">Tour-Packages</b-dropdown-item>
                <b-dropdown-item to="#">Tour-Details</b-dropdown-item>
              </b-nav-item-dropdown>
              
              <b-nav-item to="#">Service</b-nav-item>
              <b-nav-item to="#">About us</b-nav-item>
              <b-nav-item to="#">List your place</b-nav-item>
              <b-nav-item to="#">Contact</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </header>


  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>