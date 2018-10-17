 Vue.component("left",{
        props:{
            title:{
                default(){
                    return "Vue.js"
                }
            }
        },
        template:`
        <div class="son">
            <img src="img/logo.png" alt="" width="40" height="40">
            <span>{{title}}</span>
        </div>
        `
    });
