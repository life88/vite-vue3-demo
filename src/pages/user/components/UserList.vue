<script setup>
const count = ref(0);
const doubleCount = computed(() => count.value * 2);

const onIncrement = () => {
  count.value++;
};

onMounted(() => {
  console.log('mounted');
});
</script>

<template>
  <div>
    User page User List Component
    <div>Count: {{ count }}</div>
    <div>DoubleCount: {{ doubleCount }}</div>
    <el-button @click="onIncrement">Increment</el-button>
  </div>
</template>

<style scoped></style>
