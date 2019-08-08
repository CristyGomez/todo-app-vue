<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-bold font-hairline text-6xl text-center text-orange-400">PATITOH</h1>

        <todo-card class="mx-auto mt-4 h-auto w-full max-w-lg">
        <div>
            <input placeholder="New Task" @keyup.enter="addTodo" v-model="newTodo" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500">
            <hr>
            <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
                <div class="todo-item-left text-xl">
                    <input type="checkbox" v-model="todo.completed">
                   <div v-if="!todo.editing" @dblclick="editTodo(todo)" class="todo-item-label" :class="{ completed : todo.completed}">{{todo.title}}</div>
                   <input v-else class="todo-item-edit" type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus>
                </div>
                <div class="remove-item cursor-pointer" @click="removeTodo(index)">
                    &times;

                </div>
            </div>
        </div>
        </todo-card>

        <todo-card class="flex items-center px-8 mx-auto mt-10 w-full max-w-lg">
            <button @click="addTodo" v-model="newTodo" class="flex-1 mx-1 bg-green-200 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            Done
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
            beforeEditCache: '',
            todos: [
                {
                    'id': 1,
                    'title': 'Example task',
                    'done': false,
                    'editing': false,
                },
                {
                    'id': 2,
                    'title': 'Example task 2',
                    'done': false,
                    'editing': false,
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
                editing: false,    
            })
        
            this.newTodo=''
            this.idForTodo++
        },
        editTodo(todo){
            this.beforeEditCache = todo.title
            todo.editing = true
        },
        doneEdit(todo) {
            if(todo.title.trim().length == ''){
                todo.title = this.beforeEditCache
            }
            todo.editing = false
        },
        cancelEdit(todo) {
        todo.title = this.beforeEditCache
        todo.editing = false
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


  .todo-item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
  }

  .todo-item-edit {
    color: #2c3e50;
    margin-left: 12px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc; //override defaults

    &:focus {
      outline: none;
    }
  }
    .completed {
    text-decoration: line-through;
    color: grey;
  }

</style>