<template>
  <div>购票页面</div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  computed: {},
  components: {},
  created() {
    alert(this.$route.query.id);
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
