<template>
  <div class="sideBarMenu flex flex-col text-center">
    <h1 class="bg-white p-1 rounded text-black font-bold text-3xl mt-2 mb-4 font-brand">
      Guara<span class="font-brand-highlight">data</span> - Admin
    </h1>
    <div class="content flex flex-col">
      <NuxtLink v-for=" item in items" :key="item.label" :to="item.route" class="flex justify-center items-center">
        <Button severity="secondary" icon="pi pi-arrow-up-right" :aria-label="item.aria" class="btn-sidebar m-1 w-full"
          rounded>
          <span class="font-bold flex justify-start items-center">
            {{ item.label }}
          </span>
        </Button>
      </NuxtLink>
      <div class="flex justify-center items-center">
        <Button severity="secondary" icon="pi pi-arrow-up-right" aria-label="Sair" class="btn-sidebar m-1 w-full"
          rounded @click="logout">
          <span class="font-bold flex justify-start items-center">
            Sair
            <i class="icon pi pi-arrow-up-right ml-2" style="font-size: 1rem" />
          </span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    label: 'Visão geral',
    icon: 'pi pi-home',
    route: '/manage-content',
    aria: 'Home button'
  },
  {
    label: 'Criar conteúdo',
    icon: 'pi pi-book',
    route: '/manage-content/create-content',
    aria: 'Create content button'
  },
  {
    label: 'Rascunhos',
    icon: 'pi pi-book',
    route: '/manage-content/saved-blog-content-drafts',
    aria: 'Saved blog content drafts'
  },
  {
    label: 'Arquivos do blog',
    icon: 'pi pi-book',
    route: '/manage-content/blog-files',
    aria: 'View contents button'
  },
  {
    label: 'Conteúdos publicados',
    icon: 'pi pi-book',
    route: '/manage-content/published-blog-contents',
    aria: 'View contents button'
  },
  {
    label: 'Conteúdos não publicados',
    icon: 'pi pi-book',
    route: '/manage-content/unpublished-blog-contents',
    aria: 'View contents button'
  },
  {
    label: 'Visualizar contatos',
    icon: 'pi pi-book',
    route: '/manage-content/view-contacts',
    aria: 'View contents button'
  }
])

const logout = async () => {
  await LoginUtils.LoginService.logout()
  await navigateTo('/')
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 35px;
}

.btn-sidebar {
  background-color: $btn-blog;
  border: none;
  color: white;
}

.btn-sidebar:hover {
  background-color: $btn-blog-hover;
  color: black;
  border: none;
}

.btn-sidebar:hover .icon {
  transition: transform 0.25s ease-in-out;
  transform: rotate(45deg);
}
</style>
