<template>
   <div class="loading_screen" v-if="loading">
      <h4 v-if="error" class="no_animate">Something went wrong, try again.</h4>
      <h4 v-else-if="loading">Loading...</h4>
   </div>
</template>
<style src="./style.sass" lang="sass"></style>
<script src="./component.js" />
