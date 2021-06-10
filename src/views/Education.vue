<template>
  <div class="about">
    <div class="container">
      <main>
        <article>
          <h1>Education</h1>
          <Card
            image="/images/rsc.png"
            alt="Rose State College"
            title="AAS, Web Development Technology"
            body="
                    In 2011 I graduated from Rose State College with an Associate of Applied Science
                    degree in Web Development Technology. Classes included script programming,
                    advanced digital imaging, e-commerce, object-oriented programming, project management,
                    and more."
          />

          <Card
            image="/images/lu.jpg"
            alt="Liberty University"
            title="BS, Computational Science and Business"
            body="In 2021 I graduated with a Bachelor of Science degree from Liberty University
                        in multidisciplinary studies with cognates in computational science and business.
                        Classes included PHP/MySQL, JavaScript/NodeJS, business communication, and more."
          />
        </article>
      </main>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Education",
  components: {
    Card,
  },
};
</script>
