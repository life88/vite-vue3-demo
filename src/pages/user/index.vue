<script setup>
import { useRouter } from 'vue-router';
import UserList from './components/UserList.vue';
import { useUserStore } from './model';

const router = useRouter();
const userStore = useUserStore();

const onNavigate = () => {
  router.push('/');
};
</script>

<template>
  <div class="w-full py-20 text-center">
    <div>user page</div>
    <div>
      <div>userName: {{ userStore.name }}</div>
      <div>Uppercase Name: {{ userStore.upperCaseName }}</div>
      <div>age: {{ userStore.age }}</div>
    </div>
    <el-button @click="userStore.name = 'panpanda'">Update userName</el-button>
    <el-button @click="userStore.resetName">Reset</el-button>
    <user-list></user-list>
    <div>
      <el-link type="primary" @click="onNavigate">go to index page</el-link>
    </div>
  </div>
</template>

<style scoped></style>
