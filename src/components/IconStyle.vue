<template>
  <div>
    <div class="border-2 border-[#00AF91] rounded-full flex m-auto" :class="message">
      <img :src="gambar" alt="" class="m-auto" :class="ukuran" />
    </div>
    <h1 class="text-center mt-3 font-mulish text-[#00AF91]">{{ keterangan }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    gambar: {
      type: String,
      required: true,
    },
    keterangan: {
      type: String,
      default: "",
    },
    ukuran: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
