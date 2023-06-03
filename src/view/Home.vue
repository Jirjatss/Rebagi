<template>
  <NavbarVue />
  <div class="bg-weshare h-screen bg-cover relative">
    <Hero />
  </div>
  <div class="md:px-44 px-5 font-mulish" id="donasihome">
    <div class="grid grid-cols-4 py-10 justify-center md:mt-10 mt-5 gap-0 font-bold">
      <IconStyle message="md:w-[150px] w-[80px] md:h-[150px] h-[80px]" :gambar="kemanusiaan" keterangan="Kemanusiaan" ukuran="md:w-[85px] w-[45px] md:pb-3" />
      <IconStyle message="md:w-[150px] w-[80px] md:h-[150px] h-[80px]" :gambar="pendidikan" keterangan="Pendidikan" ukuran="max-w-[85px] w-[45px]" />
      <IconStyle message="md:w-[150px] w-[80px] md:h-[150px] h-[80px]" :gambar="kesehatan" keterangan="Kesehatan" ukuran="max-w-[85px] w-[45px]" />
      <IconStyle message="md:w-[150px] w-[80px] md:h-[150px] h-[80px]" :gambar="anak" keterangan="Anak" ukuran="max-w-[85px] w-[45px]" />
    </div>
    <div>
      <Deskripsi
        message1="Bantuan dari kamu akan sangat berharga untuk mereka"
        message2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sodales in malesuada parturient facilisis. Sagittis, leo, urna turpis libero nisl
      posuere pretium. Morbi sed pellentesque in auctor odio fringilla. Malesuada luctus feugiat risus in."
      />
      <div class="text-center py-10 font-bold">
        <ButtonStyle message="Pelajari Lebih Lanjut" />
      </div>
    </div>
    <hr :class="hrClass" />
    <div class="grid grid-cols-6 py-10 gap-4">
      <IconStyle message="md:w-[100px] w-[60px] h-[60px] md:h-[100px] bg-[#00AF91]" :gambar="makanan" ukuran="md:w-[45px] w-[20px]" />
      <IconStyle message="md:w-[100px] w-[60px] h-[60px] md:h-[100px] bg-[#00AF91]" :gambar="elektronik" ukuran="md:w-[45px] w-[20px] m-auto" />
      <IconStyle message="md:w-[100px] w-[60px] h-[60px] md:h-[100px] bg-[#00AF91]" :gambar="buku" ukuran="md:w-[45px] w-[20px]" />
      <IconStyle message="md:w-[100px] w-[60px] h-[60px] md:h-[100px] bg-[#00AF91]" :gambar="pakaian" ukuran="md:w-[45px] w-[20px]" />
      <IconStyle message="md:w-[100px] w-[60px] h-[60px] md:h-[100px] bg-[#00AF91]" :gambar="mainan" ukuran="md:w-[45px] w-[20px]" />
      <IconStyle message="md:w-[100px] w-[60px] h-[60px] md:h-[100px] bg-[#00AF91]" :gambar="obat" ukuran="md:w-[45px] w-[20px]" />
    </div>
    <div>
      <Deskripsi
        message1="Bantu mereka yang membutuhkan dengan beragam cara"
        message2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sodales in malesuada parturient facilisis. Sagittis, leo, urna turpis libero nisl posuere pretium. Morbi sed pellentesque in auctor odio fringilla. Malesuada luctus feugiat risus in."
      />
      <div class="text-center py-10 font-bold mt-5">
        <ButtonStyle message="Pelajari Lebih Lanjut" />
      </div>
    </div>
    <hr :class="hrClass" />
    <div>
      <DonationOption />
      <Deskripsi
        message1="Buka Donasi Bagi Mereka yang Membutuhkan Yuk!"
        message2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sodales in malesuada parturient facilisis. Sagittis, leo, urna turpis libero nisl posuere pretium. Morbi sed pellentesque in auctor odio fringilla. Malesuada luctus feugiat risus in."
      />
      <div class="text-center py-10 font-bold mt-5">
        <ButtonStyle message="Pelajari Lebih Lanjut" />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import NavbarVue from "../components/layout/Navbar.vue";
import DonationOption from "../components/DonationOption.vue";
import ButtonStyle from "../components/ButtonStyle.vue";
import IconStyle from "../components/IconStyle.vue";
import Deskripsi from "../components/Deskripsi.vue";
import Kemanusiaan from "../assets/images/kemanusiaan.png";
import Pendidikan from "../assets/images/pendidikan.png";
import Kesehatan from "../assets/images/kesehatan.png";
import Anak from "../assets/images/anak.png";
import Makanan from "../assets/images/makanan.png";
import Obat from "../assets/images/obat.png";
import Mainan from "../assets/images/mainan.png";
import Pakaian from "../assets/images/pakaian.png";
import Buku from "../assets/images/buku.png";
import Elektronik from "../assets/images/elektronik.png";

export default {
  components: {
    Hero,
    NavbarVue,
    ButtonStyle,
    IconStyle,
    Deskripsi,
    DonationOption,
  },

  data() {
    return {
      hrClass: "my-hr",
      kemanusiaan: Kemanusiaan,
      pendidikan: Pendidikan,
      kesehatan: Kesehatan,
      anak: Anak,
      makanan: Makanan,
      obat: Obat,
      mainan: Mainan,
      elektronik: Elektronik,
      buku: Buku,
      pakaian: Pakaian,
    };
  },
};
</script>

<style>
.my-hr {
  border: none;
  height: 0.5px;
  background-color: black;
  margin: 20px 0;
}
</style>
