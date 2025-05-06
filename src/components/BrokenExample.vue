<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'BrokenExample',
  mounted() {
    const test2 = 'test2'
    function testFunc(a, b) {
      if (a === b) {
        console.error('testFunc', test2)
      }
    }
    testFunc('test', 'test')
  },
}
</script>

<style>
.hello {
  color: red;
  font-size: 16px;
}
</style>
