<script setup>
import UserList from './components/UserList.vue';
import { useIndexStore } from './model';

const router = useRouter();
const store = useIndexStore();

const onNavigate = (path) => {
  router.push({
    path,
  });
};
</script>

<template>
  <div class="w-full py-20 text-center">
    <div>index page</div>
    <div class="text-4xl text-blue-400">
      <i class="i-mdi-arrow-expand"></i>
    </div>
    <div>count: {{ store.count }}</div>
    <div>double Count: {{ store.doubleCount }}</div>
    <el-button @click="store.increment">increment</el-button>
    <hello-world></hello-world>
    <user-list></user-list>
    <div>
      <el-link type="primary" @click="onNavigate('/user')">go to user page</el-link>
    </div>
    <div>
      <el-link type="primary" @click="onNavigate('/posts')">go to posts page</el-link>
    </div>
  </div>
</template>

<style scoped></style>
