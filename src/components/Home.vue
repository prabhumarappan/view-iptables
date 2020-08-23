<template>
  <b-container>
    <navbar></navbar>
    <b-row>
      <text-input></text-input>
    </b-row>
    <div class="row mb-4"></div>
    <b-row>
<!--      <template-home></template-home>-->
    </b-row>
  </b-container>
</template>

<script>
import TextInput from "./TextInput";
// import TemplateHome from "./templates/TemplateHome";
import Navbar from "./Navbar";
export default {
  name: "Home",
  components: {TextInput, Navbar},
}
</script>

<style scoped>

</style>