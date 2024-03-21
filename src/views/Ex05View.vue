<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <!-- 폼은 양방향 바인딩 -> v-bind:value 가 아니라 v-model 로 작성 -->
    <!-- 단방향 바인딩은 v-bind:속성값 작성 -->
    <form v-on:submit.prevent="getPersonVo" action="" method="get">
        <label for="uName">이름</label>
        <input id="uName" type="text" name="name" v-model="personVo.name">
        <br>
        <label for="uHp">전화번호</label>
        <input id="uHp" type="text" name="hp" v-model="personVo.hp">
        <br>
        <textarea name="content" v-model="personVo.content"></textarea>
        <br>
        <button type="button" v-on:click="setPersonVo">쓰기</button>
        <button type="submit">수정</button>
    </form>
</template>

<script>
export default{
    name: "Ex05View",
    components: {},
    data(){
        return{
            title: "Vue 공부",
            subTitle: "폼-text,textarea (양방향바인딩)->폼에는 v-model그냥쓰자",
            personVo: {}
        };
    },
    methods: {
        setPersonVo(){
            let pVo ={
                name: "정우성",
                hp: "010-222-2222",
                content: "작성완료"
            }
            this.personVo = pVo
        },
        getPersonVo(){
            console.log(this.personVo)
        }
    }
}
</script>
<style>

</style>