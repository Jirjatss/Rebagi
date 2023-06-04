<template>
    <form>
        <div class="form-control">
            <label>Alamat e-mail</label>
            <input type="text" placeholder="Masukkan alamat e-mail" />
        </div>
        <div class="form-control">
            <label>Buat Kata Sandi</label>
            <input type="text" placeholder="Masukkan kata sandi" />
        </div>
        <div class="form-control">
            <label>Konfirmasi Kata Sandi</label>
            <input type="text" placeholder="Ketik ulang kata sandi" />
        </div>
        <button class="button1">Buat Akun</button>
        <p>Atau</p>
        <button class="button2">
            <img src="../../assets/images/Google.png" />
            <span>Daftar dengan Google</span>
        </button>
        <h4>Sudah mempunyai akun? <span>Masuk Disini</span></h4>
    </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
form {
    color: #FFFFFF;

    .form-control {
        display: flex;
        margin-top: 1rem;

        label {
            font-weight: 800;
            font-size: 1rem;
        }

        input {
            margin-top: 0.5rem;
            height: 3.125rem;
            background: #FFFFFF;
            border: 1px solid #ECECEC;
            box-shadow: 0px 5px 20px rgba(109, 109, 109, 0.08);
            border-radius: 7px;

            &::placeholder {
                padding-left: 1rem;
                font-weight: 400;
                font-size: 1rem;
                color: #CECECE;
            }
        }
    }

    .button1 {
        margin-top: 2.5rem;
        width: 100%;
        height: 3.125rem;
        background: #007965;
        border-radius: 5px;
        font-weight: 700;
        font-size: 1rem;
    }

    p {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.5rem;

        &:before,
        &:after {
            content: "";
            border-bottom: 2px solid #ffffff;
            width: 46%;
        }
    }

    .button2 {
        margin-top: 24px;
        width: 100%;
        height: 3.063rem;
        background: #FFFFFF;
        border-radius: 7px;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;

        img {
            height: 60%;
            position: absolute;
            left: 0;
            margin-left: 6.25rem;
        }

        span {
            font-weight: 700;
            font-size: 1rem;
            color: #007965;
        }
    }

    h4 {
        margin-top: 3.25rem;
        font-weight: 400;
        font-size: 1.25rem;
        text-align: center;

        span {
            font-weight: bold;
        }
    }
}
</style>