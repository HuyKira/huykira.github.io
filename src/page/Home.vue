<template>
  <div class="home-page">
    <h1>Blog Huy Kira</h1>
    <div class="text-center" v-if="is_load"><img src="load.gif" class="load"></div>
    <div class="load-content">
      <itempost v-for="(item, index) in dataList" :key="index" :data="item"> </itempost>
      <div class="loadmore"><button @click="loadMore">Xem thêm </button></div>
    </div>
  </div>
</template>
<script>
  import postApi from "./../api/posts"
  import itempost from "./../components/itemPost.vue"
  export default {
    data(){
      return  {
        message: 'Hell  o Vue!',
        is_load: true,
        dataList: [],
        params: {
          page: 1,
          limit: 10,
          type: 'post'
        }
      }
    },
    components: {"itempost": itempost},
    watch: {
      params: {
        handler(val){
          this.getPost()
        },
        deep: true
      }
    },
    created(){
      this.getPost()
    },
    methods:{
      async getPost(){
        try{
          let {data} = await postApi.get(this.params)
          this.dataList = this.dataList.concat(data.data);
          this.is_load = false
        } catch(err) {
          console.log(err)
        }
      },
      loadMore(){
        this.params.page = this.params.page + 1
      }
    }
  }
</script>