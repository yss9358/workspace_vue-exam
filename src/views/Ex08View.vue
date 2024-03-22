<template>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>

    <table border="1">
        <thead>
            <tr>
                <th>순번</th>
                <th>번호</th>
                <th>이름</th>
                <th>핸드폰</th>
                <th>회사</th>
            </tr>
        </thead>
        <tbody>
            <!-- 임의로 i값을 줘서 키값으로 사용해줄 수있다 -->
            <tr v-bind:key="personVo.no" v-for="(personVo,i) in personList" >
                <td>{{ i + 1 }}</td>
                <td>{{ personVo.no }}</td>
                <td>{{ personVo.name }}</td>
                <td>{{ personVo.hp }}</td>
                <td>{{ personVo.company }}</td>
            </tr>
        </tbody>
    </table>
    <button v-on:click="getList" type="button">데이터</button>        

    <br><br><br><br><br><br>
    <span v-bind:key="i" v-for="(radioVo,i) in radioAges">
        <label>{{radioVo.text}}</label>
        <input type="radio" name="age" v-bind:value="radioVo.code" v-model="checked">
    </span>

        

</template>
<script>
export default{
    name:"Ex08View",
    components:{},
    data(){
        return{
            title : "Vue공부",
            subTitle : "반복문",
            personList:[],
            radioAges:[ {text:"10대", code:"10"},
                        {text:"20대", code:"20"},
                        {text:"30대", code:"30"},
                        {text:"기타", code:"etc"}
                        ],
            checked: "30"
        };
    },
    methods: {
        getList(){
            let pList = [
                {no:1, name:"정우성",hp:"010-1111-1111", company: "02-1111-1111"},
                {no:4, name:"이효리",hp:"010-2222-2222", company: "02-2222-2222"},
                {no:8, name:"유재석",hp:"010-3333-3333", company: "02-3333-3333"}
            ];
            this.personList = pList;
        }
    },
    created(){ // 시작할때 , 값을 불러올수있다
        this.getList();
    }
}
</script>

<style>
</style>