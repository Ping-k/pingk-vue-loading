<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-04 16:12:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-06 10:04:52
-->
<template>
    <div class="loader01" :style="pStyle"></div>
</template>

<style scoped >
.loader01 {
    box-sizing: border-box;
    width: 56px;
    height: 56px;
    border: 8px solid var(--color);
    border-right-color: transparent;
    border-radius: 50%;
    animation: loader-rotate 1s linear infinite;
}

.loader01::after {
    content: "";
    width: 8px;
    height: 8px;
    background: var(--color);
    border-radius: 50%;
    position: absolute;
    top: -1px;
    left: 33px;
}

@keyframes loader-rotate {
    0% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(0);
    }
}
</style>

<script lang="js">
export default {
    name: "LoadingB",

    props: {
        color: String,
        speed: Number,
    },
    data() {
        return {
            pStyle: {
                '--color': 'red',
            },
        };
    },
    mounted() {
        this.setStyle();
    },
    methods: {
        setStyle() {
            if (this.color) this.$set(this.pStyle, "--color", this.color);
        },
    },
};
</script>