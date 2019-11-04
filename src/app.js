import Vue from "vue";
import post from "./api/posts"
new Vue({
  el: "#app",
  data: {
    message: 'Hello Vue!',
    is_load: true
  },
  methods:{
  	async getPost(){
  		try{
  			let {data} = await post.get()
  			console.log(data.data);
  		} catch(err) {
  			console.log(err)
  		}
  	}
  }
});