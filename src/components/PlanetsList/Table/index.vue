<template>
   <span class="table_container">
      <el-table
         :data="planets"
         v-if="!loading && !error && isMobile"
         ref="filterTable"
         >
         <el-table-column
            prop="name"
            label="Name"
            sortable
            >
         </el-table-column>
         <el-table-column
         type="expand">
            <template slot-scope="props">
               <p>Rotation period: {{ props.row.rotation_period }}</p>
               <p>Climate: {{ props.row.climate }}</p>
               <p>Gravity: {{ props.row.gravity }}</p>
               <p>Created: {{ props.row.created }}</p>
               <p>Link: {{ props.row.url }}</p>
            </template>
         </el-table-column>
      </el-table>

      <el-table
         :data="planets"
         v-if="!loading && !error && !isMobile"
         ref="filterTable"
         >
         <el-table-column
            prop="name"
            label="Name"
            sortable
            >
         </el-table-column>
         <el-table-column
            prop="rotation_period"
            label="Rotation period">
         </el-table-column>
         <el-table-column
            prop="climate"
            label="Climate">
         </el-table-column>
         <el-table-column
            prop="gravity"
            label="Gravity">
         </el-table-column>
         <el-table-column
            prop="created"
            label="Created">
         </el-table-column>
         <el-table-column
            prop="url"
            label="Link">
         </el-table-column>
      </el-table>
   </span>
</template>
<style src="./style.sass" lang="sass"></style>
<script src="./component.js" />
