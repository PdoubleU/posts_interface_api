<template>
   <div class="block">
      <el-pagination
      layout="prev, pager, next"
      :total="total"
      :class="[!loading && !error ? '' : 'hidden']"
      @current-change="fetchData"
      @prev-click="fetchData"
      @next-click="fetchData">
      </el-pagination>
   </div>
</template>
<style src="./style.sass" lang="sass"></style>
<script src="./component.js" />
