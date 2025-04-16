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
    const example = 123;
    const example2 = 123
    console.log(example)
    console.log(example2)
  },
}
</script>

<style>
.hello {
  color: red;
  font-size: 16px;
}
</style>
