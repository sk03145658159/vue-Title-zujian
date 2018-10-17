Vue.component("nav1",{
        props:["navdata"],
        template:`
        <ul class="nav">
           <search></search>
           <list v-for="item in navdata" :item="item" :key="item.id"></list>
        </ul>
        `
    });