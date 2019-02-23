<template>
  <div>
    <!-- <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
        <router-link :to="'/home/newsInfo'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>发表时间 {{ item.add_time | dataFormat('YYYY-MM-DD HH:mm:ss') }}</span>
              <span>点击：{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul> -->

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsInfo/12">
          <img class="mui-media-object mui-pull-left" src="../../images/menu4.png">
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间 2012-12-12 12:12:12</span>
              <span>点击：0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../images/menu4.png">
          <div class="mui-media-body">
            <h1>木屋</h1>
            <p class="mui-ellipsis">
              <span>发表时间 2012-12-12 12:12:12</span>
              <span>点击：0次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../images/menu4.png">
          <div class="mui-media-body">
            <h1>CBD</h1>
            <p class="mui-ellipsis">
              <span>发表时间 2012-12-12 12:12:12</span>
              <span>点击：0次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from "mint-ui";
export default {
  data() {
    return {
      newList: [] // 新闻列表
    };
  },
  created() {
    this.getNewList();
  },
  methods: {
    // 获取新闻列表
    getNewList() {
      this.$http.get("").then(result => {
        if (result.body.status == 0) {
        } else {
          Toast("获取新闻列表失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  h1 {
    font-size: 14px;
  }
  .mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>

