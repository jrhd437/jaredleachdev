<template>
  <div class="home">
    <div class="container">
      <main>
        <article style="text-align: center">
          <img src="/images/404.png" />
          <h1>The requested page doesn't exist.</h1>
          <div class="btn">
            <router-link to="/">Go Home</router-link>
          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "NotFound",
  components: {},
};
</script>
