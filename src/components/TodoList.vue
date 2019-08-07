<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-bold font-hairline text-6xl text-center text-orange-400">PATITOH</h1>

        <todo-card class="mx-auto mt-4 h-64 w-full max-w-lg">
        <p>
            <label class="font-bold">Title: </label>
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
            >
            <hr>
            <label class="font-bold">Name: </label>
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
            >
            <hr>
            <label class="font-bold pr-8 ">Have you finished the homework?</label>
    
            <input type="checkbox" id="Yes" value="Yes" v-model="picked">
            <label class="font-bold pr-4 " for="Yes">Yes</label>
            <input type="checkbox" id="No" value="No" v-model="picked">
            <label class="font-bold pr-4 " for="No">No</label>
        </p>
        </todo-card>

        <todo-card class="flex items-center px-8 mx-auto mt-10 w-full max-w-lg">
            <button class="flex-1 mx-1 bg-green-200 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            Done
            </button>
            <button class="flex-1 mx-1 bg-orange-200 hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
            Update
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
    props: {

    },

    data () {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Example task',
                    done: false
                }
            ]
        };
    },

    mounted () {

    },

    methods: {

    }
}
</script>