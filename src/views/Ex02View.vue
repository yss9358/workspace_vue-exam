<template>
    <h1>{{maintitle}}</h1>
    <h2>{{subTitle}}</h2>
    
    <ol>
        <li>{{menus[0]}}</li>
        <li>{{menus[1]}}</li>
        <li>{{menus[2]}}</li>
    </ol>
    
    <ol>
        <li v-bind:key="i" v-for="(menu, i) in menus">
            {{menu}}
        </li>
    </ol>

    <table border="1">
        <thead>
            <th>이름</th>
            <th>핸드폰</th>
            <th>회사</th>
            <th>번호</th>
        </thead>
        <tbody>
            <tr>
                <td>{{personVo.no}}</td>
                <td>{{personVo.name}}</td>
                <td>{{personVo.hp}}</td>
                <td>{{personVo.company}}</td>
            </tr>
        </tbody>
    </table>

    <p>{{content}}</p>
    <p v-html="content"></p>

    <img v-bind:src="imgUrl"> <!--단방향바인딩-->

</template>

<script>

export default{
    name: "Ex02View",
    components: {},
    data() {
        return{
            maintitle: "vue문법",
            subTitle: "데이터바인딩",
            menus: ["게시판", "갤러리", "방명록"],
            personVo: {
                no : 1,
                name: "이효리",
                hp: "010-2222-3333 ",
                company: "02-2222-3333"
            },
            content: "지금부터<strong>열심히</strong>공부하겠습니다.",
            imgUrl: "https://mml.pstatic.net/www/mobile/edit/20240318_1095/upload_1710771613913KFcqp.gif"
        };
    },
    methods: {}
};

</script>

<style>

</style>