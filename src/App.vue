<template>
  <header id="top">
    <div id="logo">Jared Leach</div>
    <div id="menuHandle" v-on:click="showNav = !showNav">MENU</div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/education">Education</router-link>
      <router-link to="/skills">Skills</router-link>
      <a target="_blank" href="https://github.com/jrhd437">Projects</a>
    </nav>
  </header>
  <router-view />
  <footer>
    <section>
      <div class="footer-title">Social</div>
      <div class="footer-body">
        <div class="footer-social">
          <a target="_blank" href="https://www.linkedin.com/in/jared-hd437"
            >LinkedIn</a
          >
        </div>
        <div class="footer-social">
          <a target="_blank" href="https://twitter.com/jaredsleach">Twitter</a>
        </div>
        <div class="footer-social">
          <a target="_blank" href="https://github.com/jrhd437">GitHub</a>
        </div>
      </div>
    </section>
    <section>
      <div class="footer-title">Sites I Love</div>
      <div class="footer-body">
        <div class="footer-social"><a href="/">Home</a></div>
        <div class="footer-social">
          <a target="_blank" href="https://www.vuemastery.com/">Vue Mastery</a>
        </div>
        <div class="footer-social">
          <a target="_blank" href="https://www.digitalocean.com/"
            >DigitalOcean</a
          >
        </div>
        <div class="footer-social">
          <a target="_blank" href="https://www.smashingmagazine.com/"
            >Smashing Magazine</a
          >
        </div>
      </div>
    </section>
    <section>
      <div id="footer_nav" class="footer-title">Navigation</div>
      <div class="footer-body">
        <div class="footer-social"><router-link to="/">Home</router-link></div>
        <div class="footer-social">
          <router-link to="/education">Education</router-link>
        </div>
        <div class="footer-social">
          <router-link to="/skills">Skills</router-link>
        </div>
        <div class="footer-social">
          <a target="_blank" href="https://github.com/jrhd437">Projects</a>
        </div>
      </div>
    </section>
  </footer>

  <section id="menu" v-show="showNav">
    <div class="menu-body">
      <div class="menu-item close" v-on:click="showNav = !showNav">Close</div>
      <div class="menu-item" v-on:click="showNav = !showNav">
        <router-link to="/">Home</router-link>
      </div>
      <div class="menu-item" v-on:click="showNav = !showNav">
        <router-link to="/education">Education</router-link>
      </div>
      <div class="menu-item" v-on:click="showNav = !showNav">
        <router-link to="/skills">Skills</router-link>
      </div>
      <div class="menu-item" v-on:click="showNav = !showNav">
        <a target="_blank" href="https://github.com/jrhd437">Projects</a>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
#app {
  text-align: left;
}
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      showNav: false,
    };
  },
};
</script>
