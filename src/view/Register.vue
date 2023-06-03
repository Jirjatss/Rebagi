<template>
  <NavbarVue />
  <div class="bg-weshare h-screen bg-cover relative">
    <div class="hero min-h-screen bg-gradient-to-t from-[#00AF91] to-transparent md:w-1/2 w-full">
      <div class="w-full m-auto text-center">
        <section data-aos="fade-right" data-aos-once="true">
          <div class="md:flex flex-cols-2 items-center justify-center px-6 py-8 mx-auto lg:py-0 md:space-x-24 md:px-24 md:mt-10">
            <div class="w-full mx-auto md:mt-0 rounded-xl">
              <h1 class="text-xl font-bold text-white md:text-2xl text-center py-3 md:px-8 rounded-t-xl">Registrasi</h1>
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form class="space-y-4 md:space-y-3" @submit.prevent="handledaftar">
                  <div>
                    <label for="email" class="block mb-2 text-sm text-white md:text-start text-center font-medium">Email</label>
                    <input v-model="email" type="text" name="email" id="email" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-full p-2.5 text-black" placeholder="Enter Username" />
                  </div>
                  <div>
                    <label for="name" class="block mb-2 text-sm text-white md:text-start text-center font-medium">Username</label>
                    <input v-model="username" type="text" name="username" id="name" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-full p-2.5 text-black" placeholder="Enter Username" />
                  </div>

                  <div>
                    <label for="password" class="block text-sm text-white md:text-start text-center font-medium mb-2">Password</label>
                    <input v-model="password" type="password" name="password" id="password" placeholder="Enter Password" class="bg-white shadow-md sm:text-sm rounded-lg border border-black block w-full p-2.5 text-black md:mb-8 mb-5" />
                  </div>

                  <button type="submit" @click="handledaftar" class="px-3 py-3 block mx-auto text-white bg-[#007965] rounded-lg w-full shadow-6xl">Buat Akun</button>
                  <div class="relative p-5">
                    <hr class="absolute top-1/2 left-0 -translate-y-1/2 border-t border-gray-300 w-1/3" />
                    <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent px-2 text-white"> Atau </span>
                    <hr class="absolute top-1/2 right-0 -translate-y-1/2 border-t border-gray-300 w-1/3" />
                  </div>
                  <button type="submit" @click="handleLogin" class="px-3 py-3 mx-auto text-[#007965] bg-white rounded-lg w-full shadow-6xl flex mb-10">
                    <div class="flex mx-auto gap-3">
                      <div><img src="../assets/images/google.png" alt="" class="w-[25px]" /></div>
                      <div><p class="font-medium mx-auto">Daftar dengan Google</p></div>
                    </div>
                  </button>
                  <br />

                  <router-link to="/login" class="text-sm text-white font-medium underline text-center">Sudah mempunyai akun? Masuk Disini</router-link>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../components/layout/Navbar.vue";

export default {
  components: {
    NavbarVue,
  },
};
</script>

<style></style>
