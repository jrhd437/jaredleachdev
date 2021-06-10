<template>
  <div class="card">
    <div class="image">
      <img :src="image" :alt="alt" />
    </div>
    <div class="description">
      <h2>{{ title }}</h2>
      <div v-html="body"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    image: String,
    alt: String,
    title: String,
    body: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
