<template>
    <Navbar></Navbar>
    <section class="bg-weshare h-screen bg-cover relative">
        <div class="background">
            <div class="container">
                <h3>Daftar</h3>
                <Register></Register>
            </div>
        </div>
    </section>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue';
import Register from '../components/Register/Register.vue'

export default {
    components: {
        Navbar,
        Register
    }
};
</script>

<style lang="scss" scoped>
.background {
    background: linear-gradient(180deg, rgba(0, 175, 145, 0) 0%, #00AF91 98.41%);
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        width: 75%;

        h3 {
            font-size: 30px;
            font-weight: 700;
            color: white;
        }
    }
}
</style>
