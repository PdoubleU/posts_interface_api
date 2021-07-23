<template>
    <vue-dropdown
      :config="config"
      @setSelectedOption="setNewSelectedOption($event);"
    ></vue-dropdown>
</template>

<style src="./style.sass" lang="sass" ></style>
<script src="./component.js" />
