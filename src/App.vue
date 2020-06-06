<template>
    <div class="app">
        <div class="list">
            <transition-group
                appear
                appear-to-class="appear-to"
                appear-active-class="appear-active">
                <div class="list-item" v-for="item of list" :key="item.id">
                    {{item.userName}} --- {{item.id}}
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const list = ref(
            Array.from({ length: 5 }).map((item, index) => ({
                id: Math.random() * 10000 | 0,
                userName: `vue-next ${index}`
            }))
        );

        return {
            list
        };
    }
}
</script>


<style>
    .list-item {
        border-bottom: 1px solid #f1f1f1;
        padding: 20px 0;
        text-align: center;
        transition: transform 200ms ease;
    }

    .list-item:last-child {
        border-bottom: none;
    }

    .appear-active {
        transform: scale(0);
    }

    .appear-to {
        transform: scale(1);
    }
</style>

