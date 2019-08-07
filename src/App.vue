<template>
    <div id="app" class="bg-local" style="background-image: url(https://github.com/CristyGomez/todo-app-vue/blob/master/src/assets/patitos2.jpg)">
        <TodoList/>
    </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
    name: 'app',
    components: {
        TodoList
    }
}
</script>