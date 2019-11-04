import Vue from "vue";
import post from "./api/posts"
import itempost from "./components/itemPost.vue"
new Vue({
  el: "#app",
  data: {
    message: 'Hello Vue!',
    is_load: true,
    dataList: []
  },
  components: {"itempost": itempost},
  created(){
    this.getPost()
  },
  methods:{
  	async getPost(){
  		try{
  			let {data} = await post.get()
        this.dataList = data.data;
        this.is_load = false
  		} catch(err) {
  			console.log(err)
  		}
  	}
  }
});