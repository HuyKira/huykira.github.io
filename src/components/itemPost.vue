<template>
  <div class="data-list">
    <img :src="data.thumbnail" :alt="data.title">
    <h4><a @click="PostLink(data.slug)" class="link-op">{{data.title}}</a></h4>
    <div class="meta">Ngày đăng: <span>{{formatdate(data.date)}}</span></div>
    <div class="clear"></div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props :{
    data: {
      type: Object,
      required: true
    }
  },
  methods:{
    PostLink(slug){
      this.$router.push({ name: 'detail', params: { slug: slug }})
    },
    formatdate(dates){
      return new moment(dates).format("DD - MM - YYYY");
    },
  }
}
</script>

<style>
.loadmore {
  text-align: center;
}

.loadmore button {
  width: 150px;
  padding: 10px;
  border: 0;
  border-radius: 30px;
  color: #fff;
  background: #2196F3;
}
.link-op{
  cursor: pointer;
}
</style>