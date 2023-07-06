<template>
  <div class="box">
    <a-layout-header
      style="
        background-color: #f0f2f5;
        height: 85px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #fff;
        padding-bottom: 10px;
      "
    >
      <div style="display: flex">
        <div v-for="(item, index) in data.topList" :key="index" class="topItem">
          <div
            style="cursor: pointer"
            @click="selectTop(index, item.value)"
            :class="[
              data.top === index ? 'topSelect topUnselect' : 'topUnselect',
            ]"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </a-layout-header>
    <a-layout style="height: 100%">
      <a-layout-content> <router-view /></a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { menu } from "../store/index";

const useMenu = menu();
const router = useRouter();
const data = reactive({
  topList: [
    { name: "工具网站", value: "/tools" },
    { name: "官方文档", value: "/document" },
  ],
  top: 0,
});

// 选择top栏
function selectTop(e: number, value: string): void {
  data.top = e;
  router.push({
    path: value,
  });
  useMenu.changeKey(e);
  console.log(useMenu.key);
}

onMounted(() => {
  data.top = useMenu.key;
});
</script>

<style lang="less" scoped>
.box {
  height: 100%;
  width: 100%;
}

.topItem {
  width: 100px;
  font-size: 18px;
  text-align: center;
}

.topSelect {
  //   color: chocolate;
  border-radius: 15px 40px;
  color: #fff;
  background-color: chocolate;
}

.topUnselect:hover {
  color: #fff;
  background-color: chocolate;
  //   border-radius: 15px 40px;
  animation-name: topChange;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes topChange {
  0% {
    border-radius: 10px 10px;
  }

  100% {
    border-radius: 15px 40px;
  }
}
</style>
