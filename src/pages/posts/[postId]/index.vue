<script setup>
import { useQuery } from '@tanstack/vue-query';
import { findPostById } from '../services';

const route = useRoute();
const { title } = route.query;
const { postId } = route.params;

const { data: post, isLoading } = useQuery({
  queryKey: ['posts', postId],
  queryFn: () => {
    return findPostById(postId);
  },
  enabled: !!postId,
});
</script>

<template>
  <div>
    <div class="text-2xl">Post page</div>
    <div>Query Title: {{ title }}</div>
    <div v-if="isLoading">正在加载数据中...</div>
    <div class="text-xl">{{ post?.title }}</div>
    <div class="text-base text-gray-400">{{ post?.body }}</div>
  </div>
</template>

<style scoped></style>
