<template>
  <nav class="root_container">
    <span class="loading_background" id="navigation"></span>
      <Loading :loading="isLoading" />
      <span class="main_background"></span>
      <router-link
        to="/Home"
        v-slot="{ href, navigate }"
        custom
        >
        <div class="link-home hidden" @click="toggleVisibility">
          <a :href="href"  @click="navigate">Home</a>
        </div>
      </router-link>
      <router-link
        to="/Planets"
        v-slot="{ href, navigate }"
        custom
        >
        <div class="link-planets" @click="toggleVisibility">
          <p class="main_paragraph">Star Wars<br>Universum</p>
          <a :href="href" @click="navigate">Enter</a>
        </div>
      </router-link>
      <router-view/>
      <Footer :class="!isLoading ? classLoaded : null"/>
  </nav>
</template>

<script src="./component.js"></script>

<style lang="sass" src="./index.sass" scoped></style>
