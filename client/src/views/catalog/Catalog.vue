<template>
    <div class="catalog-container">
        <div class="catalog-title">{{title}}</div>
        <div>
            <img src="http://127.0.0.1:8000/images/bjj.jpg" width="500" height="500">
        </div>
        <video width="320" height="240" controls>
            <source src="../../assets/videos/sv.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script lang="ts" src="./Catalog.ts"></script>
<style src="./Catalog.css"></style>