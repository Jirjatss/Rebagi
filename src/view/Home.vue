<template>
  <NavbarVue />
  <div class="bg-weshare h-screen bg-cover relative">
    <Hero />
  </div>
</template>

<script>
import Hero from "../components/Home/Hero.vue";
import NavbarVue from "../components/layout/Navbar.vue";

export default {
  components: {
    Hero,
    NavbarVue,
  },
};
</script>

<style></style>
