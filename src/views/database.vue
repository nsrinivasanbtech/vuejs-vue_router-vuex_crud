<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="container-bg">
        <b-col cols="4">
          <img :src="libraryImage" class="tutorialImage" />
        </b-col>
        <b-col cols="4" align-self="center">
          <h2 class="main-hdg text-left"><b>TUTORIALS LIBRARY</b></h2>
          <h3 class="sub-hdg-db text-left">Database Tutorials</h3>
        </b-col>
      </b-row>
      <!-- <b-table striped hover :items="Webdata"></b-table> -->
      <b-row v-if="db.length" class="m-5">
        <b-col v-for="(data, index) in db" :key="index" class="container-tech-db m-2">
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
    db: state => state.db
  })
}
</script>

<style>
.container-tech-db{
  background-color: #2d7572;
  border-radius: 10px;
}
.sub-hdg-db{
  color: #2d7572;
}
</style>
