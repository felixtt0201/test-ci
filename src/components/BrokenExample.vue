<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'BrokenExample',
  props: {
    msg: String,
  },
  mounted() {
    const example = 123
    const badExample = 'change test123'
    console.log(example)
    console.log(badExample)
    // const testFuc = () => {
    //   console.log('test222', test2)
    // }

    function testFunc() {
      console.log('testFunc', test2)
    }
    testFunc()
    const test2 = 'test2'
  },
}
</script>

<style>
.hello {
  color: red;
  font-size: 16px;
}
</style>
