<template>
  <div class="control-panel">
      <Dropdown></Dropdown>
      <label for='search'>Search</label>
      <input v-model='search' v-on:input='onChange' class="search-input" placeholder="Name/title" name="search" type="text" maxlength="25">
  </div>
</template>
<style src="./style.sass" lang="sass" ></style>
<script src="./component.js" />
