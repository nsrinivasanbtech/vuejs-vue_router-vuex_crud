<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="container-bg">
        <b-col cols="4">
          <img :src="libraryImage" class="tutorialImage" />
        </b-col>
        <b-col cols="4" align-self="center">
          <h2 class="main-hdg text-left"><b>TUTORIALS LIBRARY</b></h2>
          <h3 class="sub-hdg text-left">Web Tutorials</h3>
        </b-col>
      </b-row>
      <!-- <b-table striped hover :items="Webdata"></b-table> -->
      <techtile
        tech="container-tech-web"
        :techs="web"
      />
        <!-- <b-col v-for="(data, index) in web" :key="index" class="container-tech-web m-2">
          <img :src="data.url" class="m-2">
          <p class="techClass">
            <router-link :to="`/technology/${data.tech}/${data.name}/${data.id}`">
              {{data.name}}
            </router-link>
          </p>
        </b-col> -->
    </b-container>
    <!-- <b-table striped hover :items="items" :fields="fields"></b-table> -->
  </div>
</template>

<script>
import libraryImage from '../assets/Images/library-sub-banner.jpg'
// import data from '../data/webdevelopment.js'
import { mapState } from 'vuex'
import techtile from '../components/technologyTile.vue'

export default {
  components: {
    techtile
  },
  data () {
    return {
      libraryImage: libraryImage
    }
  },
  computed: mapState({
    web: state => state.web
  })
}
</script>

<style>
.tutorialImage {
  width: 250px;
}
.techClass{
  color: #ffffff;
}
.container-bg{
  background-color: #ffffff;
}
.container-tech-web{
  background-color: #353535;
  border-radius: 10px;
}
.main-hdg{
  color: #989797;
}
.sub-hdg{
  color: #353535;
}
</style>
