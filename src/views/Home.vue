<template>
  <div class="home">
    <h1>Hey! Avail your favourite tutorial here.</h1>
    <b-row class="home-ul m-5" align-h="center">
      <b-col cols="3"><div class="circle"><svg class="svg-inline--fa fa-globe" aria-hidden="true" data-prefix="fa" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm193.2 152h-82.5c-9-44.4-24.1-82.2-43.2-109.1 55 18.2 100.2 57.9 125.7 109.1zM336 256c0 22.9-1.6 44.2-4.3 64H164.3c-2.7-19.8-4.3-41.1-4.3-64s1.6-44.2 4.3-64h167.4c2.7 19.8 4.3 41.1 4.3 64zM248 40c26.9 0 61.4 44.1 78.1 120H169.9C186.6 84.1 221.1 40 248 40zm-67.5 10.9c-19 26.8-34.2 64.6-43.2 109.1H54.8c25.5-51.2 70.7-90.9 125.7-109.1zM32 256c0-22.3 3.4-43.8 9.7-64h90.5c-2.6 20.5-4.2 41.8-4.2 64s1.5 43.5 4.2 64H41.7c-6.3-20.2-9.7-41.7-9.7-64zm22.8 96h82.5c9 44.4 24.1 82.2 43.2 109.1-55-18.2-100.2-57.9-125.7-109.1zM248 472c-26.9 0-61.4-44.1-78.1-120h156.2c-16.7 75.9-51.2 120-78.1 120zm67.5-10.9c19-26.8 34.2-64.6 43.2-109.1h82.5c-25.5 51.2-70.7 90.9-125.7 109.1zM363.8 320c2.6-20.5 4.2-41.8 4.2-64s-1.5-43.5-4.2-64h90.5c6.3 20.2 9.7 41.7 9.7 64s-3.4 43.8-9.7 64h-90.5z"></path></svg></div><div class="tech-txt"><router-link to="/webdevelopment"><h3>Web Development</h3></router-link></div></b-col>
      <b-col cols="3"><div class="circle"><svg class="svg-inline--fa fa-java fa-w-12" aria-hidden="true" data-prefix="fa" data-icon="java" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 377 512" data-fa-i2svg=""><path fill="currentColor" d="M121.6 396s-19.6 11.4 13.9 15.2c40.6 4.6 61.3 4 106-4.5 0 0 11.8 7.4 28.2 13.8C169.5 463.4 42.9 418 121.6 396m-12.2-56.1s-21.9 16.2 11.6 19.7c43.3 4.5 77.6 4.8 136.8-6.6 0 0 8.2 8.3 21.1 12.8-121.3 35.5-256.3 2.9-169.5-25.9m103.2-95.1c24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3.1 0-175.2 43.8-91.5 140.2m132.6 192.6s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2 204.2 33.2 372.4-14.9 319.4-38.8M131 281.8s-93.1 22.1-33 30.1c25.4 3.4 76 2.6 123.1-1.3 38.5-3.2 77.2-10.2 77.2-10.2s-13.6 5.8-23.4 12.5c-94.5 24.9-277 13.3-224.5-12.1 44.5-21.4 80.6-19 80.6-19m167 93.3c96.1-49.9 51.6-97.9 20.6-91.4-7.6 1.6-11 3-11 3s2.8-4.4 8.2-6.3c61.3-21.6 108.5 63.6-19.8 97.3 0-.1 1.5-1.4 2-2.6M240 0s53.2 53.2-50.5 135c-83.1 65.6-19 103.1 0 145.8-48.5-43.8-84.1-82.3-60.2-118.2C164.4 110.1 261.5 84.5 240 0m-99.5 510.4c92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6"></path></svg></div><div class="tech-txt"><router-link to="/java"><h3>Java</h3></router-link></div></b-col>
      <b-col cols="3"><div class="circle"><svg class="svg-inline--fa fa-database fa-w-14" aria-hidden="true" data-prefix="fa" data-icon="database" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 32c106 0 192 28.75 192 64v32c0 35.25-86 64-192 64S32 163.25 32 128V96c0-35.25 86-64 192-64m192 149.5V224c0 35.25-86 64-192 64S32 259.25 32 224v-42.5c41.25 29 116.75 42.5 192 42.5s150.749-13.5 192-42.5m0 96V320c0 35.25-86 64-192 64S32 355.25 32 320v-42.5c41.25 29 116.75 42.5 192 42.5s150.749-13.5 192-42.5m0 96V416c0 35.25-86 64-192 64S32 451.25 32 416v-42.5c41.25 29 116.75 42.5 192 42.5s150.749-13.5 192-42.5M224 0C145.858 0 0 18.801 0 96v320c0 77.338 146.096 96 224 96 78.142 0 224-18.801 224-96V96c0-77.338-146.096-96-224-96z"></path></svg></div><div class="tech-txt"><router-link to="/database"><h3 class="tech-txt">Database</h3></router-link></div></b-col>
    </b-row>

    <h2>Adding a new technology</h2>
    <button class="btn btn-primary" @click="toggletechForm">Add Technology</button>
    <b-form @submit.prevent="addtechnology" v-if="showtechForm">
      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Technology:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.technology"
          :options="['web','java','db']"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      showtechForm: false,
      formData: {
        name: '',
        technology: null
      }
    }
  },
  components: {
    // HelloWorld
  },
  computed: {
    ...mapGetters([
      'techCount',
      'getallWeb'
    ])
  },
  methods: {
    ...mapActions([
      'addTech'
    ]),
    toggletechForm () {
      this.showtechForm = !this.showtechForm
    },
    addtechnology () {
      const { technology, name } = this.formData
      const payload = {
        technology,
        details: {
          name
        }
      }
      this.addTech(payload)
      this.formData = {
        name: '',
        technology: null
      }
    }
  }
}
</script>

<style>
.home-ul > div{
  /* display: inline-block; */
  padding: 15px;
  margin: 5px;
  background-color: #ffffff;
}
.home-ul a{
  color: #353535;
}
svg{
  width: 100px;
  height: 100px;
  display: block;
  margin: 9px auto;
}
.tech-txt{
  margin: 10px 0px;
}
.circle{
  border: 1px solid #353535;
  border-radius: 50%;
  width: 115px;
  margin: 0 auto;
  height: 120px;
}
</style>
