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
    const badExample = 'change test';
    console.log(example)
    console.log(badExample)
  },
}
</script>

<style>
.hello {
  color: red;
  font-size: 16px;
}
</style>
