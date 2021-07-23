<template>
   <div class="post-element">
      <h4>{{post.title}}</h4>
      <p>{{post.body}}</p>
      <p>{{post.name}}</p>
      <DeleteBtn :faIcon='faIcon'></DeleteBtn>
   </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
