<template>
  <div class="text-center font-mulish text-[#00AF91] text-4xl font-bold">
    <h1>{{ message1 }}</h1>
  </div>
  <p class="text-center mt-10 text-[24px] px-24 font-tipis">
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
