import { defineStore } from "pinia";

export const menu = defineStore("main", {
  state: () => ({
    key: 0,
  }),
  persist: {
    storage: sessionStorage,
    paths: ["key"],
  },
  // 相当于计算属性 computed
  getters: {},

  // 可以处理异步或者同步方法逻辑
  actions: {
    changeKey(e: number) {
      this.key = e;
    },
  },
});
