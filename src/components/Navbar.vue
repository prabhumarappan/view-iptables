<template>
    <b-navbar type="dark" variant="info" toggleable="md">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
        <b-nav-item :to="{ name: 'Templates'}">Template</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped>

</style>