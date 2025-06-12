// src/stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: 'felix',
    age: 30,
  }),
  actions: {
    setUsername(name) {
      this.username = name
    },
    initUser() {
      const unused = 123 // ❗️使用 var，會觸發 no-var 規則
      if (unused === 'felix') {
        // ❗️使用 ==，會觸發 eqeqeq
        console.log('user loaded')
      }
      // const data = [
      //   {
      //     items: [
      //       {
      //         children: [
      //           {
      //             tags: ['a', 'b'],
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // ]

      // data.map((item) => {
      //   return item.items.map((subItem) => {
      //     return subItem.children.map((child) => {
      //       return child.tags.map((tag) => {
      //         // 第四層 map callback（巢狀 4 層 callback）⚠️ 這裡應該會觸發 max-nested-callbacks
      //         return tag.toUpperCase()
      //       })
      //     })
      //   })
      // })
    },
  },
})
