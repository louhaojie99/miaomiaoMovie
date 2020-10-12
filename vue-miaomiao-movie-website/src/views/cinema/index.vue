<template>
  <div class="">
    <!-- 吸顶 -->
    <header-bar title="喵喵影院"></header-bar>
    <!-- nav导航 -->
    <cinema-nav></cinema-nav>
    <!-- 吸底 -->
    <footerBar></footerBar>
  </div>
</template>

<script>
import headerBar from "../../components/headerBar";
import footerBar from "../../components/footerBar";
import cinemaNav from "../../components/cinemaNav";

export default {
  name: "Cinema",
  data() {
    return {};
  },
  computed: {},
  components: {
    headerBar,
    footerBar,
    cinemaNav,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
