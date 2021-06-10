<template>
  <div class="about">
    <div class="container">
      <main>
        <article>
          <h1>Skills</h1>
          <Card
            image="/images/php.png"
            alt="PHP"
            title="PHP"
            body="
                    I have used PHP nearly every day for the past 6 years, and have taken multiple university classes
                    that used the language. I'm completely comfortable with statically-typed and object-oriented PHP.
                    I am rated in the Top 5% of PHP developers on LinkedIn.
                  "
          />

          <Card
            image="/images/vuejs.png"
            alt="Vue"
            title="Vue"
            body="
                    This website was made with Vue 4 and uses the Vue Router. I've used Vue both from CLI and CDN
                    for small pieces of interactivity and full web applications. It's a breautiful front-end framework.
                  "
          />

          <Card
            image="/images/node.png"
            alt="NodeJS"
            title="NodeJS"
            body="
                    I've used NodeJS and the Node Package Manager to use libraries including VueJS, Puppeteer, ExpressJS,
                    Twit, and many others.
                  "
          />

          <Card
            image="/images/express.png"
            alt="ExpressJS"
            title="ExpressJS"
            body="
                    I have used ExpressJS for server-side logic, including for <a target='_blank' href='https://intpquotes.com'>INTP Quotes</a>,
                    which uses Express for basic routing and for the API that fetches random quotes from the SQLite database.
                    Additionally, I used it for simple authentication and to controll the Twitter bot.
                  "
          />

          <Card
            image="/images/sass.png"
            alt="Sass"
            title="Sass / SCSS"
            body="
                    I use Sass in nearly every project these days, including this site. I use it for custom CSS as well as to customize
                    CSS frameworks like Bootstrap.
                  "
          />

          <Card
            image="/images/sql.png"
            alt="MySQL"
            title="Relational Databses with SQL"
            body="
                    I have used a number of relational databases including MySQL, PostgreSQL, MariaDB, and SQLite3, using SQL to query the
                    databases. I have also used a number of ORM including PDO for PHP.
                  "
          />
          <Card
            image="/images/linux.png"
            alt="Linux"
            title="Linux"
            body="
                    On the server and the desktop, I have Linux for many years. Additionally, I've configured UFW firewall, used the APT and DNF
                    package managers, configured reverse-proxy with NGinX, used Apache, VSFTP, and many other Linux tools.
                  "
          />

          <Card
            image="/images/html5.png"
            alt="HTML5"
            title="HTML5"
            body="
                    Of course knowing HTML is a fundamental skill for web development, and I've been writting HTML for a long time.
                    In fact, I wrote my first lines of HTML when I was 8 years old.
                  "
          />

          <Card
            image="/images/css3.png"
            alt="CSS3"
            title="CSS3"
            body="
                    Another fundamental skill for web developers, I've been writting CSS for nearly 2 decades (since I was 13)
                    and rank in the Top 5% of all developers on LinkedIn.
                  "
          />

          <Card
            image="/images/git.png"
            alt="Git"
            title="Git"
            body="
                    Vesion control with Git is an essential part of nearly every project.
                  "
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
