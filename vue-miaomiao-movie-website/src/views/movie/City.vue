<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li
            v-for="item in hotlist"
            :key="item.id"
            @click.stop="
              choosecity({
                name: item.title,
                id: item.id,
              })
            "
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="city_sort">
        <mt-index-list>
          <mt-index-section
            :index="items.title"
            v-for="items in retlist"
            :key="items.title"
          >
            <mt-cell
              :title="item.title"
              v-for="item in items.items"
              :key="item.id"
              @click.native="
                choosecity({
                  name: item.title,
                  id: item.id,
                })
              "
            ></mt-cell>
          </mt-index-section>
        </mt-index-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "City",
  data() {
    return {
      hotlist: [],
      retlist: [],
    };
  },
  computed: {},
  components: {},
  created() {
    this.getCitys();
    // this.choosecity();
  },
  mounted() {},
  methods: {
    // 获取城市列表数据
    getCitys() {
      this.$http.get("/citys").then((res) => {
        const list = res.list;
        // console.log(list);
        let map = {
          hot: {
            title: "热门城市",
            items: [],
          },
        };
        list.forEach((item, index) => {
          // 取出前四项作为热门城市
          if (index < 5) {
            map.hot.items.push({
              id: item._id,
              title: item.name,
            });
          }
          // key每一项的索引
          const key = item.index;
          if (!map[key]) {
            map[key] = {
              title: key,
              items: [],
            };
          }
          map[key].items.push({
            id: item._id,
            title: item.name,
          });
        });
        // console.log(map); // 此时就有前四项的数据了
        this.hotlist = map.hot.items;

        // 城市数据重组显示
        let ret = [];
        for (let key in map) {
          const val = map[key];
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val);
          }
        }
        // console.log("ret：", ret);
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0);
        });
        this.retlist = ret;
        console.log(this.retlist);
      });
    },
    // choosecity(obj) {},
    ...mapMutations(["choosecity"]),
  },
};
</script>
<style scoped>
#content .city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul {
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort {
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>
