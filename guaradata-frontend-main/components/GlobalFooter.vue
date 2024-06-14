<template>
  <footer class="footer pt-5">
    <div class="container mx-auto px-4 flex justify-center">
      <div class="flex flex-col justify-center items-center w-full md:w-1/3 px-4">
        <div class="mb-4 flex flex-col items-center justify-center">
          <NuxtLink to="/">
            <img class="w-28" src="~/assets/img/logos/guaradata-logo-2.svg">
          </NuxtLink>
          <h2 class="bg-white p-1 rounded text-black font-bold text-3xl mt-2 font-brand">
            guara<span class="font-brand-highlight">data</span>
          </h2>
        </div>
        <section class="flex flex-col justify-center items-center justify-center">
          <div alt="Redes Sociais" class="social-icons text-white">
            <NuxtLink to="/" target="_blank" alt="Ir para Linkedin" class="m-2">
              <font-awesome-icon icon="fab fa-linkedin" class="text-2xl" />
            </NuxtLink>
            <NuxtLink to="https://github.com/guaradata" alt="Ir para Github" class="m-2">
              <font-awesome-icon icon="fab fa-github" class="text-2xl" />
            </NuxtLink>
          </div>
        </section>
      </div>
      <div class="flex flex-col justify-top w-full md:w-1/4 mt-12 footer-content">
        <div class="mb-4">
          <h2 class="text-white text-lg mb-4 font-bold">
            Projeto
          </h2>
          <ul>
            <li>
              <NuxtLink to="/frontend-tech" class="text-gray-200 hover:text-white">
                Tecnologias front-end
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/backend-tech" class="text-gray-200 hover:text-white">
                Tecnologias back-end
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/manage-content" class="text-gray-200 hover:text-white">
                Administração
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col justify-top w-full md:w-1/4 mt-12 footer-content">
        <div class="mb-4">
          <h2 class="text-white text-lg mb-4 font-bold">
            Institucional
          </h2>
          <ul>
            <li>
              <NuxtLink to="/about" class="text-gray-200 hover:text-white">
                Sobre o projeto
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy" class="text-gray-200 hover:text-white">
                Privacidade
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/site-problems" class="text-gray-200 hover:text-white">
                Problemas no site
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="m-4 flex justify-center">
      <div class="divider" />
    </div>
    <div class="flex justify-center">
      <div class="container-credits text-center">
        Made with
        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall ml-1 mr-1" focusable="false" viewBox="0 0 24 24"
          aria-hidden="true" style="font-size:14px;color:#F00;margin-bottom:-2px">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg><!-- --> <!-- --> by <!-- --> <!-- -->
        <a class="text-reset m-1" target="_blank" rel="nofollow" href="https://github.com/guaradata">Guaradata</a>
        <p class="m-1">
          2024
        </p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  //background: linear-gradient(180deg, $global-background-light 30%, $brand 200%);
  background: $global-background;
  height: auto;
}

.divider {
  width: 75%;
  border-top: 1px solid #ffffff;
}

.container-credits {
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.MuiSvgIcon-root {
  fill: white;
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  font-size: 1.5em;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
}

@media (max-width: 730px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-content {
    margin-top: 15px;
  }
}
</style>
