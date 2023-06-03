<template>
  <div class="navbar bg-transparent fixed z-50 py-5 lg:px-28 px-10 font-mulish">
    <div class="navbar-start">
      <div class="dropdown">
        <button class="navbar-toggle md:hidden mx-3" :class="{ expanded: isExpanded }" @click="toggleExpand">
          <div class="bg-[#00AF91]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
        </button>
        <ul tabindex="0" class="menu menu-sm dropdown-content p-2 shadow bg-white border-[#00AF91] border-2 rounded-box w-52 mt-8">
          <li><a>Beranda</a></li>
          <li><a>Ayo Donasi</a></li>
          <li><a>Buka Donasi</a></li>
          <li><a>Tentang Kami</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl">
        <img src="../../assets/images/logo.png" alt="" class="max-w-[50px] hidden md:flex" />
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-white text-[20px] font-thin">
        <li><a>Beranda</a></li>
        <li><a>Ayo Donasi</a></li>
        <li><a>Buka Donasi</a></li>
        <li><a>Tentang Kami</a></li>
      </ul>
    </div>
    <div class="navbar-end gap-3 font-bold">
      <a class="py-2 px-8 bg-white border-[#00AF91] border-2 rounded-lg text-[#00AF91] cursor-pointer hidden md:flex">Masuk</a>
      <a class="py-2 px-8 bg-[#00AF91] rounded-lg text-white cursor-pointer">Daftar</a>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  setup() {
    const isExpanded = ref(false);

    const toggleExpand = () => {
      if (!isExpanded.value) {
        isExpanded.value = true;
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar-toggle")) {
        isExpanded.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      isExpanded,
      toggleExpand,
    };
  },
};
</script>

<style></style>
