import request from '@/utils/request';

export function findPosts() {
  return request({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
  });
}

export function findPostById(id) {
  return request({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: 'GET',
  });
}
