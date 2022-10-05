<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <input v-model="post.title" class="input" type="text" placeholder="Название">
        <input v-model="post.body" class="input" type="text" placeholder="Описание">
        <button @click="createPost" class="btnPost">Создать пост</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },

    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
        }
    }
}
</script>

<style scoped>
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