<template>
  <div class="posts-container">
    <ul class="posts-list">
      <Loading :loading='isLoading' :error='isError'></Loading>
      <li v-bind:key="post.id" v-for="post in pageOfPosts">
        <PostBox v-bind:post='post'></PostBox>
      </li>
    </ul>
    <div class="pagination-container" v-if="!isLoading && !isError">
      <jw-pagination :items='allPosts' @changePage='onChangePage' :disableDefaultStyles='true' :maxPages='3' :labels='customLabels'></jw-pagination>
    </div>
  </div>
</template>

<script src="./component.js" />

<style src="./style.sass" lang="sass"></style>
