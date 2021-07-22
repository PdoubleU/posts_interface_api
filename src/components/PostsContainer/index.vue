<template>
  <div class="posts-container">
    <div v-bind:key="post.id" v-for="post in allPosts">
      <PostBox v-bind:post='post'></PostBox>
    </div>
  </div>
</template>

<script src="./component.js" />

<style src="./style.sass" lang="sass"></style>
