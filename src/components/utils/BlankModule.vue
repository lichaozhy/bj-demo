<template>
    <b-card
        no-body
        class="demo-blank-module">
    </b-card>
</template>

<style lang="less">

.demo-blank-module::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 100%;
    display: block;
    background-image: repeating-linear-gradient(45deg,
        transparent 15px, transparent 25px,
        #f0f0f0 25px, #f0f0f0 35px);
}
</style>

