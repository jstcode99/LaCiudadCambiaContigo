<template>
  <li ref="itemCategory">
    <a :href="`/${category.id}`">
      {{ category.title }}
    </a>
  </li>
</template>
<script>
export default {
  name: "CategorySlide",
  props: {
    category: Object,
  },
  mounted(){
    const element = this.$refs.itemCategory;
    this.$emit('chargeElement', element)
  }
}
</script>