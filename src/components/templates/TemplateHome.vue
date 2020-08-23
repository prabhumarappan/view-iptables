<template>
  <b-container>
    <navbar></navbar>
    <b-row align-h="center">
      <b-col cols="4">
        <div>
          Most popular templates:
          <ol>
            <li>MongoDB</li>
            <li>Couchbase DB</li>
            <li>InfluxDB</li>
            <li>API Server</li>
            <li>FluentD</li>
            <li>ElasticSearch & Kibana</li>
          </ol>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navbar from "../Navbar";
export default {
  name: "TemplateHome",
  components: {Navbar}
}
</script>

<style scoped>

</style>