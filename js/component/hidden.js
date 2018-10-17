Vue.component("hidden",{
    props:["data"],
        template: `
            <div class="hidden" >
                <div v-for="item in data">
                    {{item.title}}
                </div>
            </div>
    `
    });