<template>
  <div class="bg-footer bg-cover relative">
    <div class="bg-gradient-to-t from-[#00AF91] to-transparent">
      <div class="hidden md:block">
        <div class="grid grid-cols-2 py-20">
          <img src="../../assets/images/download.png" alt="" class="m-auto" />
          <div class="m-auto font-mulish text-white text-start">
            <div class="px-10">
              <h1 class="text-[36px] font-bold">Download <span class="font-sansita mx-4"> Rebagi </span>Sekarang</h1>
              <p class="text-[26px] mt-10">Mari Berbagi dengan mereka yang membutuhkan. Bantuanmu sangat berharga untuk mereka</p>
            </div>
            <div class="flex mt-10">
              <button class="items-start">
                <img src="../../assets/images/appstore.png" alt="" />
              </button>
              <button>
                <img src="../../assets/images/googlestore.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer p-10 text-neutral-content font-bold md:px-20" id="footer">
        <div class="md:ms-10 max-w-md">
          <img src="../../assets/images/logo.png" alt="" class="w-[156px] md:block hidden" />
          <h1 class="font-sansita mt-5 text-[36px] text-center text-white mx-auto">Rebagi</h1>
        </div>
        <div class="text-white md:mt-16">
          <span class="font-bold text-[18px] mb-5">Menu</span>
          <div class="grid gap-y-3 font-medium text-[16px]">
            <a href>Ayo Donasi</a>
            <a href>Buka Donasi</a>
            <a href>Tentang Kami</a>
          </div>
        </div>
        <div class="text-white md:mt-16">
          <span class="font-bold text-[18px] mb-5">Lokasi Kami</span>
          <div class="grid gap-y-3 font-medium text-[16px]">
            <a :href="getGoogleMapsLink" target="_blank">Jalan Dasan Anyar Kecamatan Jereweh</a>
          </div>
        </div>
        <div class="text-white md:mt-16">
          <span class="font-bold text-[18px] mb-5">Kontak Kami</span>
          <div class="grid gap-y-3 font-medium text-[16px]">
            <p>Email : sajadhijir@gmail.com</p>
            <p>Telp : 0812 3362 3106</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getGoogleMapsLink() {
      // Buat URL Google Maps dengan koordinat atau alamat yang ditentukan
      const googleMapsUrl = `https://maps.app.goo.gl/5dyVmRWyHkhAcBWQ8?g_st=ic`;

      return googleMapsUrl;
    },
  },
};
</script>

<style></style>
