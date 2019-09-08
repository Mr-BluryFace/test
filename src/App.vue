<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import home from './components/home.vue';
import links from './components/links.vue';

export default {
  components: {
    'my-home': home,
    'my-links': links
  },
  data() {
    return{

    }
  },
  methods: {

  }
}
</script>

<style>

</style>
