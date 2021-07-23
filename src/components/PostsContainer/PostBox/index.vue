<template>
   <div class="post-element">
      <h4>{{post.title}}</h4>
      <p>{{isReadMoreActive ? post.body : post.body.slice(0,50)}}</p>
      <a v-if='!isReadMoreActive' @click='toggleReadMoreActive'>Read more...</a>
      <p>{{post.name}}</p>
      <DeleteBtn @remove='removeThisPost' :faIcon='faIcon'></DeleteBtn>
   </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
