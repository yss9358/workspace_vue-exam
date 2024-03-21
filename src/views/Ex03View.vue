<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <p>{{ counter }}</p>
    <button type="button" v-on:click="plus">더하기(+)</button>
    <button type="button" v-on:click="minus">빼기(-)</button>
    <br>
    <br>
    
    <button type="button" v-on:click="write">메세지출력</button>
    <p>안녕{{ message }}</p>
</template>

<script>
export default{
    name: "Ex03View",
    components: {},
    data(){
        return{
            title:"Vue공부",
            subTitle: "클릭이벤트",
            counter: 0,
            message: ""
        };
    },
    // methods 에서 data값에 접근할때는 this. 를 붙여서 접근
    methods: {
        plus(){(this.counter += 1)},
        minus(){this.counter -= 1;},
        write(){this.message += "하세요"}
    }
}

</script>

<style>

</style>