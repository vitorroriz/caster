<template>
      <div class="catalog-item">
            <video class="catalog-video" :id="videoId" controls></video> 
            <div class="video-label">{{fileName}}</div>
      </div>
</template>

<script lang="ts" src="./CatalogItem.ts"></script>
<style lang="scss" src="./CatalogItem.scss"> </style>