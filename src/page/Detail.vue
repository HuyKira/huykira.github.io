<template>
  <div class="detail-page">
    <div class="text-center" v-if="is_load"><img src="load.gif" class="load"></div>
    <h1 style="margin-bottom: 5px;">{{dataContent.title}}</h1>
    <div class="text-center" style="margin-bottom: 5px;">
      Ngày đăng: {{formatdate(dataContent.date)}}
    </div>
    <div class="load-content detail-content" v-html="autoBr(dataContent.content)">
    </div>
    <div class="text-center" style="margin: 5px 0;">
      Nguồn: <a :href="'https://huykira.net?p='+dataContent.id" target="_blank">{{dataContent.title}}</a>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import postApi from "./../api/posts"
  import { autop } from '@wordpress/autop'
  export default {
    data(){
      return  {
        message: 'Hell  o Vue!',
        is_load: true,
        dataContent: {}
      }
    },
    created(){
      this.getDetail()
    },
    methods:{
      async getDetail(){
        try{
          let {data} = await postApi.detail(this.$route.params.slug)
          if(data.data[0]){
            this.dataContent = data.data[0]
          }
          this.is_load = false
        } catch(err) {
          console.log(err)
        }
      },
      formatdate(dates){
        return new moment(dates).format("DD - MM - YYYY");
      },
      autoBr(data){
        return autop(data);
      },
    }
  }
</script>