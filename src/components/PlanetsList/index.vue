<template>
  <div class="PlanetsList">
    <div class="table" v-if="transitionEnd">
      <Loading :loading="isLoading" :error="isError"/>
      <el-input
        v-if="!isLoading && !isError"
        class="search_bar"
        placeholder="Searching..."
        v-model="search"
        prefix-icon="el-icon-search"
        @input="filterData"
        clearable
      ></el-input>
      <Table
         :planets="filterData(planets, search)"
         :loading="isLoading"
         :error="isError"
         :isMobile="isMobile"/>
      <Pagination
         :fetch-data="fetchData"
         :total="total"
         :loading="isLoading"
         :error="isError"/>
    </div>
  </div>
</template>

<script src="./component.js" />

<style src="./style.sass" lang="sass"></style>
