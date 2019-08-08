<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-bold font-hairline text-6xl text-center text-orange-400">PATITOH</h1>

        <todo-card class="mx-auto mt-4 h-64 w-full max-w-lg">
        <div>
            <input placeholder="New Task" @keyup.enter="addTodo" v-model="newTodo" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500">
            <hr>
            <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
                <div class="text-xl">
                    {{todo.title}}
                </div>
                <div class="remove-item cursor-pointer" @click="removeTodo(index)">
                    &times;

                </div>
            </div>
        </div>
        </todo-card>

        <todo-card class="flex items-center px-8 mx-auto mt-10 w-full max-w-lg">
            <button class="flex-1 mx-1 bg-green-200 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            Done
            </button>
            <button class="flex-1 mx-1 bg-blue-200 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Edit
            </button>
            <button class="flex-1 mx-1 bg-red-200 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            Delete
            </button>
        </todo-card>
    </div>
</template>

<script>
export default {
    name: 'todo-list',

    data () {
        return {
            newTodo: '',
            idForTodo: 3,
            todos: [
                {
                    'id': 1,
                    'title': 'Example task',
                    'done': false,
                },
                {
                    'id': 2,
                    'title': 'Example task 2',
                    'done': false,
                },
            ]
        };
    },

    mounted () {

    },

    methods: {
        addTodo(){
            if(this.newTodo.trim().length == 0){
                return
            }

            this.todos.push({
                id: this.idForTodo,
                title: this.newTodo,
                done: false,    
            })
        
            this.newTodo=''
            this.idForTodo++
        },
        removeTodo(index){
            this.todos.splice(index, 1)
        }
    }
}
</script>
<style>
  .todo-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>