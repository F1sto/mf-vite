<template>
  <div class="hello-wrapper">
    <h1>{{ msg }}</h1>
    <button @click="count++" class="count-btn">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
.hello-wrapper {
  display: flex;
  align-items: center;
  flex-flow: column;

  .count-btn {
    width: fit-content;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    color: white;
    background: #1515bf;
  }
}

</style>
