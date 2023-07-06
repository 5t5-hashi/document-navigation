<template>
  <div class="content box">
    <!-- 左侧栏 -->
    <div class="sider" style="width: 120px">
      <!-- <div
        v-for="(item, index) in data.contentList"
        :key="index"
        style="height: 36px"
      >
        <div @click="selectSider(index, item.value)">
          <a
            :class="[
              data.sider === index ? 'siderItem siderSelect' : 'siderItem',
            ]"
            :href="'#' + item.value"
            >{{ item.name }}</a
          >
        </div>
      </div> -->
    </div>
    <div style="width: 20px; height: 1px"></div>
    <div class="right">
      <div
        :id="item.value"
        class="rightItem"
        v-for="(item, index) in data.contentList"
        :key="index"
      >
        <div class="itemTitle">
          {{ item.name }}
        </div>

        <div class="itemList">
          <div
            class="itemData"
            v-for="(item2, index2) in item.childrens"
            :key="index2"
          >
            <img
              :src="item2.imageUrl"
              :alt="item2.name"
              style="
                height: 20px;
                width: 20px;
                margin-right: 5px;
                object-fit: cover;
              "
            />
            <div @click="jump(item2.url)" style="cursor: pointer">
              {{ item2.name }}
            </div>
          </div>
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
  sider: 0,

  contentList: [
    {
      name: "常用工具",
      value: "tools",
      childrens: [
        {
          name: "草料二维码",
          url: "https://cli.im/",
          imageUrl: "https://static.clewm.net/static/images/favicon.ico",
        },
        {
          name: "正则大全",
          url: "https://any86.github.io/any-rule/",
          imageUrl: "https://any86.github.io/any-rule/favicon.ico",
        },
        {
          name: "时间戳转换",
          url: "https://tools.fun/timestamp.html",
          imageUrl:
            "data:image/png;base64,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",
        },
        {
          name: "文件格式转换",
          url: "https://www.aconvert.com/cn/",
          imageUrl: "https://www.aconvert.com/favicon.ico",
        },
        {
          name: "有道翻译",
          url: "https://fanyi.youdao.com/index.html#/",
          imageUrl:
            "https://ydlunacommon-cdn.nosdn.127.net/31cf4b56e6c0b3af668aa079de1a898c.png",
        },
        {
          name: "英文大小写转换",
          url: "https://www.iamwawa.cn/daxiaoxie.html",
          imageUrl: "https://www.iamwawa.cn/Public/img/logo.png",
        },
        {
          name: "DuangCloud",
          url: "https://portal.dc-site5.com/#/home",
          imageUrl:
            "https://portal.dc-site5.com/theme/aurora/static/img/rocket2.a37fff7d.svg",
        },
      ],
    },
    {
      name: "开发相关平台",
      value: "headend",
      childrens: [
        {
          name: "微信",
          url: "https://mp.weixin.qq.com/",
          imageUrl:
            "https://ts2.cn.mm.bing.net/th?id=ODLS.92d44a33-6357-400c-9c7c-01d54045b5a6&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "抖音",
          url: "https://mp.weixin.qq.com/",
          imageUrl:
            "https://ts3.cn.mm.bing.net/th?id=ODLS.bef4f01d-8629-48b1-bf41-246050023bfc&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "钉钉",
          url: "https://open.dingtalk.com/",
          imageUrl:
            "https://ts2.cn.mm.bing.net/th?id=ODLS.df1f9766-8db6-40bc-a6c7-e62bd0a3f784&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "Figma",
          url: "https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=995163580446254342",
          imageUrl:
            "https://ts4.cn.mm.bing.net/th?id=ODLS.27416eed-7578-439e-ae1c-f0392d225a34&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "阿里云",
          url: "https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Faccount-devops.aliyun.com%2Flogin%3Fnext_url%3Dhttp%3A%2F%2Faccount-devops.aliyun.com%2Flogin%3Fnext_url%3Dhttp%253A%252F%252Fcodeup.aliyun.com%252Fpeijie%252Ftang-xiao-ya",
          imageUrl:
            "https://ts1.cn.mm.bing.net/th?id=ODLS.8723a591-d8b9-42f8-99e1-2e386c5a7fd7&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "蓝湖",
          url: "https://mp.weixin.qq.com/",
          imageUrl:
            "https://ts1.cn.mm.bing.net/th?id=ODLS.6815303c-e633-42f6-8af7-6ea5a2a4d7ea&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "即时设计",
          url: "https://js.design/home",
          imageUrl:
            "https://ts1.cn.mm.bing.net/th?id=ODLS.1cbc8765-3179-4526-a1eb-fa45317a7000&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "uniapp",
          url: "https://www.dcloud.io/",
          imageUrl: "https://web-assets.dcloud.net.cn/unidoc/zh/uni.png",
        },
        {
          name: "uniCloud",
          url: "https://unicloud.dcloud.net.cn/",
          imageUrl:
            "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
        },
        {
          name: "禅道",
          url: "https://www.zentao.net/index.html",
          imageUrl:
            "https://ts1.cn.mm.bing.net/th?id=ODLS.6da47222-9abf-4ab3-b9bf-38ddaea5a93a&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "fir.im",
          url: "https://www.betaqr.com/",
          imageUrl:
            "https://ts2.cn.mm.bing.net/th?id=ODLS.11aacac2-42f6-4cbd-b9c2-0f8993f5fa97&w=16&h=16&o=6&pid=1.2",
        },
      ],
    },
    {
      name: "UI组件库",
      value: "ui",
      childrens: [
        {
          name: "Ant Design Vue",
          url: "https://www.antdv.com/docs/vue/introduce-cn/",
          imageUrl: "https://www.antdv.com/assets/logo.1ef800a8.svg",
        },
        {
          name: "vant",
          url: "https://vant-contrib.gitee.io/vant/#/zh-CN",
          imageUrl: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
        },
        {
          name: "vant weapp",
          url: "https://vant-contrib.gitee.io/vant-weapp/0.x/#/intro",
          imageUrl: "https://img.yzcdn.cn/vant/logo.png",
        },
        {
          name: "element Plus",
          url: "https://element-plus.org/zh-CN/#/zh-CN",
          imageUrl:
            "https://ts3.cn.mm.bing.net/th?id=ODLS.57304398-66ea-459d-8d9c-4647aea8751b&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "Bootstrap",
          url: "https://v5.bootcss.com/",
          imageUrl:
            "https://ts2.cn.mm.bing.net/th?id=ODLS.b5a2289b-a495-4805-ab3f-1bb4751f4682&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "ECharts",
          url: "https://echarts.apache.org/zh/index.html",
          imageUrl:
            "https://ts1.cn.mm.bing.net/th?id=ODLS.e8e5d7af-dab0-4c46-8d5b-a1efc790556d&w=32&h=32&o=6&pid=13.1",
        },
        {
          name: "秋云",
          url: "https://www.ucharts.cn/v2/#/",
          imageUrl:
            "https://avatar.kancloud.cn/83/2bda673e8471d41d0fe8dd2b373b3d!large",
        },
        {
          name: "AntV",
          url: "https://antv.antgroup.com/",
          imageUrl:
            "https://ts1.cn.mm.bing.net/th?id=ODLS.a56c63a5-ca5f-4f50-8085-c609e0f8d628&w=16&h=16&o=6&pid=1.2",
        },
      ],
    },
    {
      name: "样式动画技术",
      value: "animation",
      childrens: [
        {
          name: "iconfont",
          url: "https://www.iconfont.cn/",
          imageUrl:
            "https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png",
        },
        {
          name: "three.js",
          url: "https://www.three3d.cn/docs/index.html",
          imageUrl:
            "https://ts1.cn.mm.bing.net/th?id=ODLS.a2bfd26b-f2c8-40f9-a577-a1cc6fbcab3d&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "在线clip-path",
          url: "http://tools.jb51.net/code/css3path",
          imageUrl: "https://web-abin.gitee.io/abin-web/assets/36-645b8c49.png",
        },
        {
          name: "贝塞尔曲线",
          url: "https://cubic-bezier.com/#.17,.67,.83,.67",
          imageUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAY1BMVEX///8AAADr+fr////1/PwAqrsAprgKrr5hy9XU8fQUssH0+/xQxdEitsUwusg/v8zE7PAds8P////p+Pqw5eqp4+mN2eH3/P2h4OeQ2+I2vMra8/a86e2b3uRrzthKw89Ewc0z3iepAAAABXRSTlPwAO/g70YqzXQAAADSSURBVDjLhdNLbsMwDARQuqlGjqiv/3HaJPc/ZWUHBYwWpGdH8GGkDak5CTUXog8hn0QXaohbKyQMHVVwgxEC12+g/QVHCOzT9QicL+4da12Myf4F6/h4+pqXnzLPfP8HbHmXr7kf2hjc8YljJl7K/gMBLLPftwLAyLGOIsCjq3sZIHbboDTkEUYB8BxUYO8TjALQsjMKqNMNGkDioINhhFEAAq86+P6C0UDgpIJaYIKVAdKc/BJkEPucXk+5AVMuBtofit22MhBzPb+s09s8ve4fJkoXyynCJe4AAAAASUVORK5CYII=",
        },
        {
          name: "贝塞尔曲线",
          url: "https://www.bezier-curve.com/",
          imageUrl: "https://www.bezier-curve.com/favicon.ico",
        },
        {
          name: "css渐变色",
          url: "https://www.three3d.cn/docs/index.html",
          imageUrl: "https://cssgradient.io/images/favicon-23859487.png",
        },
        {
          name: "border-radius",
          url: "https://wow.techbrood.com/fiddle/40829",
          imageUrl:
            "https://s.techbrood.com/themes/techbrood/image/favicon.ico",
        },
        {
          name: "css阴影",
          url: "https://shadows.brumm.af/",
          imageUrl: "https://shadows.brumm.af/favicon.svg",
        },
        {
          name: "animxyz",
          url: "https://animxyz.com/",
          imageUrl:
            "https://animxyz.com/assets/static/animxyz-logo.ce0531f.39f3bde368e480505b70778acaa2ac74.png",
        },
        {
          name: "过渡动画",
          url: "https://www.transition.style/",
          imageUrl: "https://www.transition.style/favicon.png",
        },
        {
          name: "滚动条生成器",
          url: "https://scrollbar.jason-liang.com/",
          imageUrl:
            "https://scrollbar.jason-liang.com/assets/logo-880c6605.png",
        },
      ],
    },
    {
      name: "学习网站",
      value: "learn",
      childrens: [
        {
          name: "github",
          url: "https://github.com/",
          imageUrl:
            "https://ts4.cn.mm.bing.net/th?id=ODLS.fe916855-7a5a-4f44-b52e-1c5c31f0329d&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "Gitee",
          url: "https://github.com/",
          imageUrl:
            "https://ts3.cn.mm.bing.net/th?id=ODLS.801cff4e-cdce-446d-ba43-fa6cf0e27c18&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "CSDN",
          url: "https://www.csdn.net/",
          imageUrl:
            "https://ts1.cn.mm.bing.net/th?id=ODLS.0b3ab3c6-5a37-48a2-9392-fd2793d6c3ba&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "掘金",
          url: "https://juejin.cn/?utm_source=infinitynewtab.com",
          imageUrl:
            "https://ts1.cn.mm.bing.net/th?id=ODLS.e77e4ebd-d2e4-408e-a6af-771755cd7ea5&w=16&h=16&o=6&pid=1.2",
        },
        {
          name: "简书",
          url: "https://www.jianshu.com/techareas/backend",
          imageUrl:
            "https://ts1.cn.mm.bing.net/th?id=ODLS.07e95df8-de7e-403a-bc7e-cf754b1a51a8&w=16&h=16&o=6&pid=1.2",
        },
      ],
    },
    {
      name: "Python",
      value: "python",
      childrens: [
        {
          name: "生成请求代码",
          url: "https://curlconverter.com/#",
          imageUrl: "https://curlconverter.com/favicon.ico",
        },
      ],
    },
  ],
});

function selectSider(index: number, value: string) {
  data.sider = index;
}

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

.siderItem {
  cursor: pointer;
  padding: 3px;
  border-radius: 5px;
  width: 100px;
}

.siderItem:hover {
  background-color: chocolate;
  color: #fff;
}

.siderSelect {
  color: chocolate;
}

.right {
  width: 100%;
  min-width: 500px;
  min-height: 800px;
  height: 800px;
  overflow-y: scroll;
  padding-right: 40px;
  padding-left: 20px;
  padding-bottom: 50px;
  position: relative;
}
.rightItem {
  margin-bottom: 30px;
}

.itemTitle {
  background-color: #fff;
  padding: 10px 15px;
  margin-bottom: 2px;
  border-radius: 20px 20px 0 0;
  font-size: 15px;
  font-weight: 700;
}

.itemList {
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 15px;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 1.1px 3.2px 2.6px rgba(0, 0, 0, 0.16),
    2.9px 8.1px 6.6px rgba(0, 0, 0, 0.11),
    5.8px 16.5px 13.5px rgba(0, 0, 0, 0.089),
    12px 33.9px 27.7px rgba(0, 0, 0, 0.071), 33px 93px 76px rgba(0, 0, 0, 0.05);
}

.itemData {
  display: flex;
  align-items: center;
  margin-right: 20px;
  width: 164px;
  height: 42px;
}

a {
  color: #000;
  display: inline-block;
}
</style>
