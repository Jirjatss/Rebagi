<template>
  <button class="py-4 px-8 bg-[#00AF91] rounded-lg text-white cursor-pointer">{{ message }}</button>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
