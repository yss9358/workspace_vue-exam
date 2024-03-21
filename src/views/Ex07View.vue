<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>



    <label>10대</label>
    <input type="radio" name="age" value="10" v-model="picked">

    <label>20대</label>
    <input type="radio" name="age" value="20" v-model="picked">
    
    <label>30대</label>
    <input type="radio" name="age" value="30" v-model="picked">
   
    <label>기타</label>
    <input type="radio" name="age" value="etc" v-model="picked">

    <p>당신의 나이는 {{ picked }}대 입니다</p>

    <br><br><br><br><br>
    <label>독서</label><input type="checkbox" name="hobby" value="book" v-model="checked">
    <label>여행</label><input type="checkbox" name="hobby" value="trip" v-model="checked">
    <label>안녕</label><input type="checkbox" name="hobby" value="hi" v-model="checked">
    <label>zzz</label><input type="checkbox" name="hobby" value="sleep" v-model="checked">
    <p>선택한 취미는 {{ checked }}</p>
</template>
<script>
export default{
    name: "Ex07View",
    components:{},
    data(){
        return{
            title : "Vue 공부",
            subTitle : "폼-radio, checkbox: (양방향바인딩)-> 폼에는 v-model 사용",
            picked: "30",
            checked: ["book","hi"]
        };
    },
    methods:{}
}
</script>