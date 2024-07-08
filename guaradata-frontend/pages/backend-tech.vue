<template>
  <div class="tech-about mt-12">
    <div class="first-section text-center">
      <h1 class="font-bold text-6xl m-5 font-brand">
        Guara<span class="font-brand-highlight">data</span>
        Back-end
      </h1>
      <p class="font-bold text-lg pl-12 pr-12">
        O Blog Guaradata foi desenvolvido usando as tecnologias mais recentes e eficientes nos bastidores. Isso
        significa que, por trás da aparência bonita que você vê, há um sistema sólido e rápido que cuida de tudo, desde
        armazenar as informações até garantir que o site funcione sem problemas, mesmo quando muitas pessoas o visitam
        ao mesmo tempo. Então, você pode navegar tranquilamente, sabendo que o Blog Guaradata está equipado com o que há
        de melhor para tornar sua experiência a melhor possível.
      </p>
    </div>
    <div class="second-section w-full flex justify-center">
      <div class="img p-5">
        <NuxtLink to="https://nestjs.com/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg">
        </NuxtLink>
      </div>
      <div class="img p-5">
        <NuxtLink to="https://www.typescriptlang.org/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg">
        </NuxtLink>
      </div>
      <div class="img p-5">
        <NuxtLink to="https://www.mongodb.com/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg">
        </NuxtLink>
      </div>
      <div class="img p-5">
        <NuxtLink to="https://www.docker.com/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg">
        </NuxtLink>
      </div>
      <div class="img p-5">
        <NuxtLink to="https://mongoosejs.com/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg">
        </NuxtLink>
      </div>
    </div>
    <div class="second-section w-full flex justify-center">
      <div class="img p-5">
        <NuxtLink to="https://www.prisma.io/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg">
        </NuxtLink>
      </div>
      <div class="img p-5">
        <NuxtLink to="https://www.postgresql.org/">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 300px;
  height: 300px;
  padding: 15px;
  border: 5px solid #7A2A0A;
  border-radius: 15%;
}

img:hover {
  border: 5px solid #000000;
  background-color: rgba(192, 192, 192, 0.431);
  cursor: pointer;
}

.cards-blog-home {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
}

@media (max-width: 1000px) {
  .second-section {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }

  img {
    width: 200px;
    height: 200px;
  }
}
</style>
