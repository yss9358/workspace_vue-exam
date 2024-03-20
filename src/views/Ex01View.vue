<template>
    <h1>{{maintitle}}</h1>
    <h2>{{subtitle}}</h2>
    <p>{{content}}</p>
</template>

<script>
    export default {
        name : "Ex01View",
        components : {},
        data(){
            return {
                maintitle: "vue문법",
                subtitle: "바인딩된 소제목",
                content: "데이터를 먼저 생각하세요"
            };
        },
        methods: {}
    };

</script>

<style>

</style>