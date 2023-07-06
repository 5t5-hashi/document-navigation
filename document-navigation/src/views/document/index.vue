<template>
  <div class="content box">
    <!-- 左侧栏 -->
    <div class="sider" style="width: 120px"></div>
    <div style="width: 20px; height: 1px"></div>
    <div class="right">
      <div
        v-for="(item, index) in data.contentList"
        :key="index"
        style="
          height: 36px;
          width: 120px;
          text-align: center;
          margin-bottom: 15px;
        "
      >
        <div class="item" @click="jump(item.value)">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const data = reactive({
  contentList: [
    { name: "w3school", value: "https://www.w3school.com.cn/html/index.asp" },
    {
      name: "微信",
      value: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
    },
    { name: "uniapp", value: "https://uniapp.dcloud.net.cn/tutorial/" },
    { name: "uniCloud", value: "https://uniapp.dcloud.net.cn/uniCloud/" },
    {
      name: "抖音",
      value:
        "https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/introduction/overview",
    },
    { name: "webpack", value: "https://www.webpackjs.com/concepts/" },
    { name: "Vue2", value: "https://v2.cn.vuejs.org/v2/guide/" },
    { name: "Vue3", value: "https://cn.vuejs.org/guide/introduction.html" },
    { name: "TS", value: "https://www.tslang.cn/docs/home.html" },
    { name: "pinia", value: "https://pinia.vuejs.org/zh/getting-started.html" },
    {
      name: "pinia插件",
      value: "https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/",
    },
    { name: "MDN", value: "https://developer.mozilla.org/zh-CN/" },
    { name: "钉钉", value: "https://open.dingtalk.com/document/" },
    { name: "AntV G2", value: "https://g2.antv.antgroup.com/api/chart" },
    { name: "AntV L7", value: "https://l7.antv.antgroup.com/api/scene" },
    { name: "eslint", value: "https://zh-hans.eslint.org/docs/latest/" },
    {
      name: "three.js",
      value:
        "http://www.yanhuangxueyuan.com/threejs/docs/index.html#manual/zh/",
    },
    {
      name: "less",
      value: "https://less.bootcss.com/#%E6%A6%82%E8%A7%88",
    },
    {
      name: "canvas",
      value: "https://www.w3school.com.cn/tags/html_ref_canvas.asp",
    },
    {
      name: "animation",
      value: "https://www.w3school.com.cn/css/css3_animations.asp",
    },
    {
      name: "廖雪峰Python",
      value: "https://www.liaoxuefeng.com/wiki/1016959663602400",
    },
    {
      name: "廖雪峰Git",
      value: "https://www.liaoxuefeng.com/wiki/896043488029600",
    },
  ],
});

function jump(url: string) {
  // console.log(url);
  // window.location.href = url;
  window.open(url);
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  // justify-content: center;
}

.right {
  width: 100%;
  min-width: 600px;
  min-height: 500px;
  height: 500px;
  overflow-y: scroll;
  padding: 20px 40px 50px 20px;
  // border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.item {
  cursor: pointer;
  padding: 3px;
  border-radius: 5px;
  display: inline-block;
  font-size: 18px;
}

.item:hover {
  background-color: chocolate;
  color: #fff;
  animation: hoverAnimation 0.3s linear;
}

@keyframes hoverAnimation {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: chocolate;
    color: #fff;
  }
}

.itemSelect {
  color: chocolate;
}
</style>
