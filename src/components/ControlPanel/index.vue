<template>
  <div class="control-panel">
      <Dropdown></Dropdown>
      <span>
        <font-awesome-icon :icon="faIcon" />
        <input v-model='search' v-on:input='onChange' class="search-input" placeholder="Name/title" name="search" type="text" maxlength="25">
      </span>
  </div>
</template>
<style src="./style.sass" lang="sass" ></style>
<script src="./component.js" />
