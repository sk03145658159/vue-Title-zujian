Vue.component("hidden1",{
    props:["data","con"],
        template: `
            <div class="hidden" v-show="result.length>0">
                <div v-for="item in result"  @click="getval(item.title)">
                    {{item.title}}
                </div>
            </div>
   `,
    methods:{
        getval(val){
            this.$emit("abc",val)
        }
    },
    computed:{
        result(){
            return this.data.filter((item)=>{
                if(item.title.indexOf(this.con)>-1 && this.con){
                    return item
                }
            })
        }
    }
    });