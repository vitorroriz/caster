<template>
    <div class="catalog-container">
        <div class="catalog-title">{{title}}</div>
        <div class="catalog">
            <div class="catalog-wrapper">
                <CatalogItem v-for="item in videoList" :key="item.videoId" :videoId="item.videoId" :videoUrl="item.videoUrl">  
                </CatalogItem>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Catalog.ts"></script>
<style lang="scss" src="./Catalog.scss"></style>