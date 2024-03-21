<template>
    <h1>{{title}}</h1>
    <h2>{{ subTitle }}</h2>
    <select name="telecom">
        <option value="">이동통신사</option>
        <option value="SKT">SKT</option>
        <option value="KT" selected="selected">KT</option>
        <option value="LG">LG</option>
    </select>
    <br><br><br><br><br>
    <select name="telecom" v-model="telecom">
        <option value="">이동통신사</option>
        <option value="SKT">SKT</option>
        <option value="KT">KT</option>
        <option value="LG">LG</option>
    </select>

    <p>선택한 이동통신사는 {{ telecom }} 입니다</p>

</template>
<script>
export default{
    name:"Ex06View",
    components:{},
    data(){
        return{
            title: "Vue공부",
            subTitle: "폼- selectbox: (양방향바인딩)-> 폼에는 v-model 을 사용 ",
            telecom: "LG"
        }
    },
    methods: {}
}

</script>
<style>
</style>