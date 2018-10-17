Vue.component("list", {
    props:["item"],
        template: `
         <li @mouseenter="change(item)" @mouseleave="change(item)" >{{item.title}}
         <san v-show="item.son"></san>
                <hidden :data="item.son" v-show="result"></hidden>
            </li>
        `,
    methods:{
        change(item){
            item.state=!item.state;
        }
    },
    computed:{
        result(){
            return (this.item.state) && (this.item.son)
        }
    }
    });