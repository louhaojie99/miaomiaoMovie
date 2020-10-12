<template>
  <div id="content">
    <div class="cinema_menu">
      <router-link tag="div" to="/cinema/allcity" class="city_switch">
        全城 <i class="iconfont icon-lower-triangle"></i>
      </router-link>
      <router-link tag="div" to="/cinema/brand" class="brand_swtich">
        品牌 <i class="iconfont icon-lower-triangle"></i>
      </router-link>
      <router-link tag="div" to="/cinema/feature" class="feature_switch">
        特色 <i class="iconfont icon-lower-triangle"></i>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "cinemaNav",
  data() {
    return {};
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
</style>
