<template>
  <div class="login flex flex-col align-items-center justify-content-center">
    <div class="header-component component m-1">
      <h1 class="font-bold text-3xl text-center pt-6">
        Login
      </h1>
    </div>
    <div class="email-component component m-1 p-3">
      <h2 class="font-bold text-lg mt-1 mb-3">
        E-mail:
      </h2>
      <input id="email" v-model="emailInput" type="text" placeholder="Digite seu e-mail" class="w-full border-2 p-2"
        required>
    </div>
    <div class="password-component component m-1 p-3">
      <h2 class="font-bold text-lg mt-1 mb-3">
        Senha:
      </h2>
      <input id="password" v-model="passwordInput" type="password" placeholder="Digite sua senha"
        class="w-full border-2 p-2" required>
    </div>
    <div class="button-component component flex justify-center">
      <Button severity="secondary" icon="pi pi-arrow-up-right" label="Fazer login" class="btn-profile m-1" rounded
        @click="login">
        <span class="font-bold flex justify-center items-center">
          Entrar
          <i class="icon pi pi-arrow-up-right ml-2" style="font-size: 1rem" />
        </span>
      </Button>
    </div>
  </div>
</template>

<script setup>
import { LoginUtils } from '~/composables/LoginService'
const emailInput = ref('')
const passwordInput = ref('')
const login = async () => {
  const data = {
    email: emailInput.value,
    password: passwordInput.value
  }
  if (await
    LoginUtils.LoginService.login(data)) { await navigateTo('/manage-content') }
}
</script>

<style lang="scss" scoped>
.login {
  margin: 40px auto 30px auto;
  background-color: #000000;
  border-radius: 20px;
  height: 400px;
  width: 35%;
}

.component {
  width: 80%;
  margin: 5px auto 5px auto;
}

h1,
h2 {
  color: white;
}

input {
  border-radius: 30px;
}

input::placeholder {
  padding-left: 5px;
  color: #999;
  font-style: italic;
  opacity: 1;
}

.btn-profile {
  background-color: black;
  border: solid 3px;
  color: white;
}

.btn-profile:hover {
  background-color: white;
  border: solid 3px;
  color: black;
}

.btn-profile:hover .icon {
  transition: transform 0.25s ease-in-out;
  transform: rotate(45deg);
}

.btn-link {
  width: auto;
  height: auto;
  text-decoration: none;
}

@media (max-width: 1000px) {
  .login {
    width: 50%;
  }
}

@media (max-width: 400px) {
  .login {
    width: 80%;
  }
}
</style>
