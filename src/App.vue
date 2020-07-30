<template>
    <div class="app">
        <!-- <router-view></router-view> -->
        <Suspense>
            <template #default>
                <router-view></router-view>
            </template>
            <template #fallback>
                加载中...
            </template>
        </Suspense> 
    </div>
</template>
