<template>
    <div>
        <h2>{{technology.name}}</h2>
        <div>{{technology.description}}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      technology: {}
    }
  },
  computed: {
    ...mapState([
      'web',
      'java',
      'db'
    ])
  },
  mounted () {
    const technology = this[this.$route.params.tech][this.$route.params.id - 1]
    this.technology = technology
  }
}
</script>
