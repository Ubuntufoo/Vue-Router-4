
<script>
import sourceData from '@/data.json'
export default {
  props: {
    id: { type: Number, required: true }
  },
  computed: {
    destination() {
      return sourceData.destinations.find(destination => destination.id === this.id)
    }
  }
}
</script>

<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
    <RouterView></RouterView>
  </section>
</template>