<script setup>
// 這個元件提供巢狀限制的測試，請解開註解測試。

// if 套 if 不能超過三層
// function ifExample() {
//   const items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//     { id: 3, name: 'Item 3' },
//   ]
//   const condition1 = true
//   const condition2 = true
//   if (condition1) {
//     // depth = 1
//     if (condition2) {
//       // depth = 2
//       items.forEach((item) => {
//         console.log(item.name)
//       })
//       if (condition1) {
//         // depth = 3
//         items.forEach((item) => {
//           console.log(item.id)
//         })
//         if (condition2) {
//           // depth = 4
//           items.forEach((item) => {
//             console.log(item.name, item.id)
//           })
//         }
//       }
//     }
//   }
// }
// ifExample()

// function forExample() {
//   const items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//     { id: 3, name: 'Item 3' },
//   ]
//   for (const item of items) {
//     console.log(item.name)
//     for (const item of items) {
//       console.log(item.id)
//       if (item.id === 2) {
//         console.log('Found item with id 2:', item.name)
//         for (const item of items) {
//           console.log(item.name, item.id)
//         }
//       }
//     }
//   }
// }

// forExample()

// function whileExample() {
//   const items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//     { id: 3, name: 'Item 3' },
//   ]
//   let index = 0
//   while (index < items.length) {
//     console.log(items[index].name)
//     index++
//     let innerIndex = 0
//     while (innerIndex < items.length) {
//       console.log(items[innerIndex].id)
//       if (items[innerIndex].id === 2) {
//         console.log('Found item with id 2:', items[innerIndex].name)
//         items.forEach((item) => {
//           console.log(item.name, item.id)
//           while (innerIndex < items.length) {
//             console.log(items[innerIndex].name, items[innerIndex].id)
//             innerIndex++
//             while (innerIndex < items.length) {
//               console.log(items[innerIndex].name, items[innerIndex].id)
//               innerIndex++
//               while (innerIndex < items.length) {
//                 console.log(items[innerIndex].name, items[innerIndex].id)
//                 innerIndex++
//                 while (innerIndex < items.length) {
//                   console.log(items[innerIndex].name, items[innerIndex].id)
//                   innerIndex++
//                 }
//               }
//             }
//           }
//         })
//         if (innerIndex < items.length) {
//           console.log('Inner loop completed')
//         }
//       }
//       innerIndex++
//     }
//   }
// }
// whileExample()

// function forEachExample() {
//   const data = [
//     {
//       children: [
//         {
//           list: [
//             {
//               items: [
//                 {
//                   tags: ['a', 'b'],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ]

//   data.forEach((d) => {
//     d.children.forEach((c) => {
//       c.list.forEach((l) => {
//         console.log(l)
//         if (l.items) {
//           console.log('test', l)
//           l.items.forEach((i) => {
//             console.log('test', i)
//           })
//         }
//         // l.items.forEach((i) => {
//         //   if (l.items) {
//         //     console.log('test', i)
//         //   }
//         // })
//         // l.items.forEach((i) => {
//         //   // console.log(i)
//         //   // ⛔️ 這一層是第 4 層，會被 max-depth 捕捉
//         //   // i.tags.forEach((t) => {
//         //   //   console.log(t)
//         //   //   i.tags.forEach((t) => {
//         //   //     console.log(t)
//         //   //   })
//         //   // })
//         // })
//       })
//     })
//   })
// }
// forEachExample()

// function mapExample() {
//   const data = [
//     {
//       items: [
//         {
//           children: [
//             {
//               tags: ['a', 'b'],
//             },
//           ],
//         },
//       ],
//     },
//   ]

//   data.map((item) => {
//     return item.items.map((subItem) => {
//       return subItem.children.map((child) => {
//         return child.tags.map((tag) => {
//           // 第四層 map callback（巢狀 4 層 callback）⚠️ 這裡應該會觸發 max-nested-callbacks
//           return tag.toUpperCase()
//         })
//       })
//     })
//   })
// }
// mapExample()

// function switchExample(action) {
//   switch (action.type) {
//     case 'type1':
//       if (action.payload) {
//         for (let i = 0; i < action.payload.length; i++) {
//           switch (action.payload[i]) {
//             case 'sub1':
//               console.log('sub1') // ⚠️ 第四層：switch > if > for > switch
//               break
//             default:
//               console.log('unknown sub type')
//           }
//         }
//       }
//       break
//     default:
//       console.log('unknown type')
//   }
// }

// switchExample({ type: 'type1', payload: ['sub1'] })
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
