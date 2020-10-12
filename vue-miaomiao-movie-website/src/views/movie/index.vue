<template>
  <div id="main">
    <!-- 吸顶 -->
    <header-bar title="喵喵电影"></header-bar>
    <!-- nav导航 -->
    <movie-nav-bar></movie-nav-bar>
    <!-- 吸底 -->
    <footerBar></footerBar>
  </div>
</template>

<script>
import headerBar from "../../components/headerBar";
import footerBar from "../../components/footerBar";
import movieNavBar from "../../components/movieNavBar";

export default {
  name: "Movie",
  data() {
    return {};
  },
  computed: {},
  components: {
    headerBar,
    footerBar,
    movieNavBar,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
