<template>
  <div :class="[isNavbar ? 'navbar bg-[#00AF91] fixed z-50 py-5 lg:px-28 px-10 font-mulish' : 'navbar bg-transparent fixed z-50 py-5 lg:px-28 px-10 font-mulish']" v-on:scroll="changeBg">
    <div class="navbar-start">
      <div class="dropdown">
        <button class="navbar-toggle md:hidden mx-3" :class="{ expanded: isExpanded }" @click="toggleExpand">
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" color="white" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
        </button>
        <ul tabindex="0" class="menu menu-sm dropdown-content p-2 shadow bg-white border-[#00AF91] border-2 rounded-box w-52 mt-8 font-bold">
          <li><a>Beranda</a></li>
          <li><a>Ayo Donasi</a></li>
          <li><a>Buka Donasi</a></li>
          <li><a>Tentang Kami</a></li>
        </ul>
      </div>
      <router-link to="/" class="btn btn-ghost normal-case text-xl">
        <img src="../../assets/images/logo.png" alt="" class="max-w-[50px] hidden md:flex" />
      </router-link>
      <a class="font-sansita md:hidden font-bold text-white">Rebagi</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-white text-[20px] font-medium">
        <li><a>Beranda</a></li>
        <li><a>Ayo Donasi</a></li>
        <li><a>Buka Donasi</a></li>
        <li><a>Tentang Kami</a></li>
      </ul>
    </div>
    <div class="navbar-end gap-3 font-bold">
      <router-link to="/login" :class="[isNavbar ? 'py-2 px-8 bg-[#00AF91] border-white border-2 rounded-lg text-white cursor-pointer ' : 'py-2 px-8 bg-white text-[#00AF91]  border-white border-2 rounded-lg  cursor-pointer me-5']">
        Masuk
      </router-link>
      <router-link
        to="/register"
        :class="[isNavbar ? 'py-2 px-8 bg-white text-[#00AF91]  border-white border-2 rounded-lg  cursor-pointer hidden md:flex' : '  py-2 px-8 bg-[#00AF91] border-white border-2 rounded-lg text-white cursor-pointer hidden md:flex']"
      >
        Daftar
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  setup() {
    const isExpanded = ref(false);
    const isNavbar = ref(false);

    const toggleExpand = () => {
      if (!isExpanded.value) {
        isExpanded.value = true;
      }
    };

    const changeBg = () => {
      if (window.scrollY <= 80) {
        isNavbar.value = false;
      } else if (window.scrollY > 80) {
        isNavbar.value = true;
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar-toggle")) {
        isExpanded.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("scroll", changeBg);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      isExpanded,
      toggleExpand,
      isNavbar,
    };
  },
};
</script>

<style></style>
