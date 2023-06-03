<template>
  <NavbarVue />
  <div class="bg-weshare h-screen bg-cover relative">
    <Hero />
  </div>
  <DonasiHomeVue />
</template>

<script>
import DonasiHomeVue from "../components/Home/DonasiHome.vue";
import Hero from "../components/Home/Hero.vue";
import NavbarVue from "../components/layout/Navbar.vue";

export default {
  components: {
    Hero,
    NavbarVue,
    DonasiHomeVue,
  },
};
</script>

<style></style>
