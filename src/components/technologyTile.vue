<template>
    <b-row v-if="techs.length" class="m-5">
        <b-col v-for="(data, index) in techs" :key="index" :class="tech" class="m-2">
            <img :src="data.url" class="m-2">
            <p class="techClass">
            <router-link :to="`/technology/${data.tech}/${data.name}/${data.id}`">
                {{data.name}}
            </router-link>
            <!-- <a v-text="data.name" ></a> -->
            </p>
        </b-col>
    </b-row>
</template>

<script>
export default {
  props: {
    tech: String,
    techs: Array
  }
}
</script>
