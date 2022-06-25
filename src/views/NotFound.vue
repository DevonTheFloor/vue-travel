<template>
  <div>
    <GoBack />
    <h1>Not Found</h1>
    <p>Zut! TRy another one, thx.
      <router-link :to="{name: 'Home'}">Home</router-link>
    </p>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack'

export default {
  components: {
    GoBack
  }
}
</script>