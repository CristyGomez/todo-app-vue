<template>
    <div id="app" class="bg-fixed bg-no-repeat bg-cover min-h-screen" style="background-image: url(http://www.wallpaperstalk.com/wp-content/uploads/2019/05/jvOXWUEag.jpg)">
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


