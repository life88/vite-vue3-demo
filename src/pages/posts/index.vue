<script setup>
import { useQuery } from '@tanstack/vue-query';
import { findPosts } from './services';

const router = useRouter();
const { isPending, isFetching, isError, data, error } = useQuery({
  queryKey: ['posts'],
  queryFn: findPosts,
});

const onNavigate = (post) => {
  router.push(`/posts/${post.id}?title=${post.title}`);
};
</script>

<template>
  <div>
    <div class="text-2xl">Posts page</div>
    <div v-if="isPending">正在处理中...</div>
    <div v-if="isFetching">正在获取数据中...</div>
    <div v-if="isError">请求出错：{{ error }}</div>
    <ul>
      <li v-for="post in data" :key="post.id">
        <span class="text-blue-400 cursor-pointer" @click="onNavigate(post)">
          {{ post.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
