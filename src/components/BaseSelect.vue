<template>
  <v-select v-bind="$attrs" v-on="$listeners">
    {{ $slots }}
    <template v-for="(index, name) in $slots" v-slot:[name]>
      <slot :name="name" />
    </template>
  </v-select>
</template>

<script>
export default {
  name: "BaseSelect",
};
</script>
