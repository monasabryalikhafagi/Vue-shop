<template>
  <div>
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div
                class="
                  d-flex
                  flex-row
                  align-items-center
                  justify-content-center justify-content-lg-start
                "
              >
                <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fas fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fas fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <i class="fas fa-linkedin-in"></i>
                </button>
              </div>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  v-model="email"
                  id="email"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label class="form-label" for="email"
                  >Email address</label
                >
               <div class="input-errors" v-if="errors.length">
                  <div class="error-msg" v-for=" err in errors.password">
                    <span class="text-danger"> {{err}}</span>
                    </div>
                </div>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-3">
                <input
                  type="password"
                  v-model="password"
                  id="password"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label class="form-label" for="password">Password</label>
                <div class="input-errors" v-if="errors.length">
                  <div class="error-msg" v-for=" err in errors.password">
                    <span class="text-danger"> {{err}}</span>
                    </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <!-- Checkbox -->
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" class="text-body">Forgot password?</a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem"
                  @click="login"
                >
                  Login
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a href="#!" class="link-danger">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        class="
          d-flex
          flex-column flex-md-row
          text-center text-md-start
          justify-content-between
          py-4
          px-4 px-xl-5
          bg-primary
        "
      >
        <!-- Copyright -->
        <div class="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        <!-- Copyright -->

        <!-- Right -->
        <div>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="#!" class="text-white">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <!-- Right -->
      </div>
    </section>
    <!-- <button @click="AuthProvider('google')" class="bt btn primary">auth Google</button> -->
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueSocialauth from "vue-social-auth";
import { required, email } from '@vuelidate/validators'

Vue.use(VueAxios, axios);
Vue.use(VueSocialauth, {
  providers: {
    google: {
      clientId:
        "925606157834-dotfmqv6f5f5ql833epdghr0itm7mis0.apps.googleusercontent.com",
      clientSecret: "qmKTMFFnkv55PIMEbNotmtjk",
      redirectUri: "http://localhost:8080/auth/google/callback", // Your client app URL
    },
  },
});
export default {
  name: "Login",
  data() {
    return {
     email:'',
     password:'',
     errors:{

     }
    };
  },
  methods: {
    login : function ( ) {
      this.$http
        .post("http://laravel-shop.test/api/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
            const token = response.data.access_token;
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            console.log(JSON.parse(window.atob(base64)));
            localStorage.setItem('token', token);
              
             this.$router.push('/');
        })
        .catch( (error) => {
          if (error.response) {
            console.log("response");
            this.errors = error.response.data.errors;
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    },
    AuthProvider(provider) {
      var self = this;

      this.$auth
        .authenticate(provider)
        .then((response) => {
          console.log(response);
          self.SocialLogin(provider, response);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    SocialLogin(provider, response) {
      this.$http
        .post("http://shop.test/api/auth/social-login/" + provider, response)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  },
};
</script>

<style>
</style>
