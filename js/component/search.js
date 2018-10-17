Vue.component("search", {
        template: `
        <li class="first"><i class="iconfont icon-fangdajing"></i> <input type="text" class="input" v-model="con">
        <hidden1 :data="[{title:'111aaa'},{title:'1aaa111'},{title:'222aaa'},{title:'1aaa22'}]" :con="con" @abc="abc"></hidden1>
        </li>
        `,data(){
            return{
                con:""
            }
    },
    methods:{
            abc(val){
                this.con=val
            }
    }
    });