<template>
<div>


<home-products></home-products>

</div>
</template>

<script>
// @ is an alias to /src
 import HomeProducts from '../components/HomeProducts.vue'

export default {
  name: 'Home',
  components: {
    HomeProducts,
  }
}
</script>
