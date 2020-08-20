<template>
  <div>
    <h1>content</h1>
    <h2>component outside Suspense</h2>
    <IndexView />
    <h2>component inside Suspense</h2>
    <Suspense>
      <template #default>
        <IndexView />
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
