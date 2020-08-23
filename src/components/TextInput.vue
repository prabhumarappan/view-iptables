<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="6">
        <b-form-input v-model="rule" placeholder="Enter the rule" wid></b-form-input>
      </b-col>
      <b-col cols="1">
        <b-button variant="success" v-on:click="convertRule">Submit</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "TextInput",
  data: function () {
    return {
      rule: null,
    }
  },
  methods: {
    convertRule: function () {
      console.log(this.rule);
    }
  }
}
</script>

<style scoped>

</style>