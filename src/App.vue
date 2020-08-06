<template>
  <div>
    <h1>content</h1>
    <!-- <router-view></router-view> -->
    <!-- <IndexView/> -->
    <Suspense>
      <template #default>
        <IndexView />
        <!-- <router-view></router-view> -->
      </template>
      <template #fallback>
        加载中...
      </template>
    </Suspense>
  </div>
</template>

<script>
import IndexView from '@/views/index/index.vue'

export default {
  components: { IndexView },
}
</script>
