<template>
    <div class="catalog-container">
        <div class="catalog-title">{{title}}</div>
        <div class="video-item">
            <video :id="mainVideoId" controls>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>

<script lang="ts" src="./Catalog.ts"></script>
<style lang="scss" src="./Catalog.scss"></style>