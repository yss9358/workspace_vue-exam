<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
    <div class="box" v-bind:class="{'box-red':isRed,'box-blue':isBlue,'f-bold':isBold,'f-size':isBig,'f-type': fontChange}">
        {{ boxText }}
    </div>
    <br>
    <button button="button" v-on:click="redBox">빨간박스</button>
    <button button="button" v-on:click="blueBox">파란박스</button>
    <button button="button" v-on:click="boldOnOff">볼드 on/off</button>
    <button button="button" v-on:click="fontSize">크기</button>
    <button button="button" v-on:click="fontType">폰트타입</button>

    <br><br><br><br><br>
    <p style="font-size: 5px; color: #0000ff"> 인라인스타일로 태그에 스타일 직접추가</p>

    <p v-bind:style="styleType">인라인스타일로 변경</p>
    <button type="button" v-on:click="changeType">인라인스타일변경</button>

</template>

<script>
export default{
    name: 'Ex04View',
    components: {},
    data(){
        return{
            title: "Vue공부",
            subTitle: "class 속성 제어",
            boxText: "vue class 속성 제어",
            isRed : false,
            isBlue : false,
            isBold : false,
            isBig : false,
            fontChange : false,
            styleType: ""
        }
    },  
    methods: {
        redBox(){
            this.isRed = true;
            this.isBlue = false;
        },
        blueBox(){
            this.isBlue = true;
            this.isRed = false;
        },
        boldOnOff(){
            if(this.isBold == true){
                this.isBold = false
            } else (
                this.isBold = true
            )
        },
        fontSize(){
            if(this.isBig == true){
                this.isBig = false
            } else(
                this.isBig = true
            )
        },
        fontType(){
            this.fontChange = !this.fontChange
        },
        changeType(){
            this.styleType = "color : #0000ff;"
        }
        
    }
}
</script>

<style>
 .box{
    width: 150px;
    border : 1px solid #000000;
 }
 .box-red{
    background-color: #ff0000;
 }
 .box-blue{
    background-color: #0000ff;
 }
 .f-bold {
    font-weight: bold;
 }
 .f-size {
    font-size: 20px;
 }
 .f-type{
    font-style: italic;
 }
</style>