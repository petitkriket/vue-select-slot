<template>
  <div>
    <v-select
      :options="options"
      label="name"
      :filterable="false"
      @search="search"
      v-model="selectedUser"
    >
      <template #option="{ name, address }">
        <b>{{ name }}</b>
        <em>{{ address.street }} {{ address.zipcode }}</em>
      </template>
      <template #selected-option="{ name, address }">
        <b>{{ name }}</b>
        <em>{{ address.street }} {{ address.zipcode }}</em>
      </template>
    </v-select>

    <BaseSelect
      :options="options"
      label="name"
      :filterable="false"
      @search="search"
      v-model="selectedUser"
    >
      <template #option="{ name, address }">
        <b>{{ name }}</b>
        <em>{{ address.street }} {{ address.zipcode }}</em>
      </template>

      <template #selected-option="{ name, address }">
        <b>{{ name }}</b>
        <em>{{ address.street }} {{ address.zipcode }}</em>
      </template>
    </BaseSelect>
  </div>
</template>

<script>
import BaseSelect from "./BaseSelect.vue";

export default {
  name: "HelloWorld",
  components: {
    BaseSelect,
  },
  data() {
    return {
      options: [],
      loading: false,
      multiSelectUser: null,
      selectedUser: null,
    };
  },
  mounted: function () {
    this.search();
  },
  methods: {
    search: function (queryString) {
      this.loading = true;
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((res) => {
          this.loading = false;
          this.options = res;
          this.selectedUser = res[0];
        })
        .catch((e) => {
          console.error(e);
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.select-container {
  display: flex;
  width: 100%;
}
fieldset {
  flex: 1 1 0;
}
</style>
