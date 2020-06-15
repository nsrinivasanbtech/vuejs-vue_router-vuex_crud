<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="container-bg">
        <b-col cols="4">
          <img :src="libraryImage" class="tutorialImage" />
        </b-col>
        <b-col cols="4" align-self="center">
          <h2 class="main-hdg text-left"><b>TUTORIALS LIBRARY</b></h2>
          <h3 class="sub-hdg-java text-left">Java Tutorials</h3>
        </b-col>
      </b-row>
      <!-- <b-table striped hover :items="Webdata"></b-table> -->
      <b-row v-if="java.length" class="m-5">
        <b-col v-for="(data, index) in java" :key="index" class="container-tech-java m-2">
          <img :src="data.url" class="m-2">
          <p class="techClass">
            <router-link :to="`/technology/${data.tech}/${data.name}/${data.id}`">
              {{data.name}}
            </router-link>
          </p>
        </b-col>
      </b-row>
    </b-container>
    <!-- <b-table striped hover :items="items" :fields="fields"></b-table> -->
  </div>
</template>

<script>
import libraryImage from '../assets/Images/library-sub-banner.jpg'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      libraryImage: libraryImage
    }
  },
  computed: mapState({
    java: state => state.java
  })
}
</script>

<style>
.container-tech-java{
  background-color: #1A9A8B;
  border-radius: 10px;
}
.sub-hdg-java{
  color: #1A9A8B;
}
</style>
