<template>
    <div class="app">
        <PostForm @create="createPost" />
        <PostList :posts="posts" />
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
    components: {
        PostForm,
        PostList
    },
    data() {
        return {
            posts: [
                { id: 1, title: 'HTML', body: 'Описание поста' },
                { id: 2, title: 'CSS', body: 'Описание поста' },
                { id: 2, title: 'JavaScript', body: 'Описание поста' }
            ]
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
        }
    }
}
</script>

<style>
/* scoped говорит о том, что стили применяются только к этому компоненту */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 32px;
}
</style>