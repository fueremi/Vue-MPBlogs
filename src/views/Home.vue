<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlog" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleCard"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>Never miss a post. Register for you free account today!</h2>
        <router-link class="router-button" :to="{ name: 'Register' }"
          >Register for MPBlogs <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";
import BlogCard from "@/components/BlogCard";
import Arrow from "@/assets/Icons/arrow-right-light.svg";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, Javascript and more. Register today ti never miss a post",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlog: [
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler blog post tittle!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler blog post tittle!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
  computed: {
    sampleCard() {
      return this.$store.state.sampleCard;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;

      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;

      @media (min-width: 800px) {
        text-align: initial;
      }
    }
  }
}
</style>
