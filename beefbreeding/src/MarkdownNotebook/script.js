new Vue({
    el:'#notebook',
    data(){
        return{
            content:'this is a note',
        }
    },
    computed: {
        notePreview() {
            //Markdown渲染为HTML
            return marked(this.content)
        },
    },
    watch: {
        //侦听content数据属性
        content(val,oldVal) {
            console.log('new note:',val,'old note:',oldVal)
            console.log('saving note:',this.content)
            localStorage.setItem('content',this.content)
            },
        },



    methods:{
        saveNote(val){
            console.log('saving note:',this.content)
            localStorage.setItem('content',this.content)
            //this.reportOperation('saving')
        },
        reportOperation(opName){
            console.log('The',opName,'operation was completed!')
        },
    },
    created() {
        this.content = localStorage.getItem('content') || 'You can write in **markdown**'
    },

})
console.log('restored note:',localStorage.getItem('content'))