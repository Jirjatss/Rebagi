<template>
  <div class="text-center font-mulish text-[#00AF91] md:text-4xl text-lg font-bold">
    <h1>{{ message1 }}</h1>
  </div>
  <p class="text-center mt-10 md:text-[24px] text-md md:px-24 font-tipis">
    {{ message2 }}
  </p>
</template>

<script>
export default {
  props: {
    message1: {
      type: String,
      default: "",
    },
    message2: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
