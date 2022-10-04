<template>
    <div class="app">
        <form @submit.prevent>
            <h4>Создание поста</h4>
            <input @input="title = $event.target.value" v-bind:value="title" class="input" type="text" placeholder="Название">
            <input @input="body = $event.target.value" v-bind:value="body" class="input" type="text" placeholder="Описание">
            <button class="btnPost" @click="createPost">Создать пост</button>
        </form>
        <div class="post" v-for="post in posts">
            <div><strong>Название: </strong>{{post.title}}</div>
            <div><strong>Описание: </strong>{{post.body}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                { id: 1, title: 'HTML', body: 'Описание поста' },
                { id: 2, title: 'CSS', body: 'Описание поста' },
                { id: 2, title: 'JavaScript', body: 'Описание поста' }
            ],
            title: '',
            body: '',
        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost);
            this.title = '';
            this.body = '';
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

.post {
    padding: 16px;
    border: 2px solid darkcyan;
    margin-top: 16px;
}

form {
    display: flex;
    flex-direction: column;
}

.input {
    width: 100%;
    border: 1px solid darkcyan;
    padding: 8px 16px;
    margin-top: 8px;
}

.btnPost {
    max-width: 240px;
    padding: 8px 16px;
    margin-top: 8px;
    align-self: flex-end;
    color: white;
    background-color: darkcyan;
    border: none;
}

.btnPost:hover {
    background-color: rgb(0, 201, 201);
}
</style>