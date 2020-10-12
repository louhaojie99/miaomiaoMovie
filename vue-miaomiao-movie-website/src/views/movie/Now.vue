<template>
  <div class="movie_body">
    <ul>
      <li v-for="item in list" :key="item._id" @click="goDetail(item._id)">
        <div class="pic_show"><img :src="item.imgurl" /></div>
        <div class="info_list">
          <h2>{{ item.title }}</h2>
          <p>
            观众评 <span class="grade">{{ item.ratings }}</span>
          </p>
          <p>{{ item.stars }}</p>
          <p>{{ item.description }}</p>
        </div>
        <div class="btn_mall" @click.stop="goLogin(item._id)">购票</div>
      </li>
      <!-- <li>
        <div class="pic_show"><img src="/images/movie_2.jpg" /></div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p>观众评 <span class="grade">9.3</span></p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>今天56家影院放映443场</p>
        </div>
        <div class="btn_mall">
          购票
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_1.jpg" /></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评 <span class="grade">9.2</span></p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">
          购票
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_2.jpg" /></div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p>观众评 <span class="grade">9.3</span></p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>今天56家影院放映443场</p>
        </div>
        <div class="btn_mall">
          购票
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_1.jpg" /></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评 <span class="grade">9.2</span></p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">
          购票
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_2.jpg" /></div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p>观众评 <span class="grade">9.3</span></p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>今天56家影院放映443场</p>
        </div>
        <div class="btn_mall">
          购票
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_1.jpg" /></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评 <span class="grade">9.2</span></p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">
          购票
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_2.jpg" /></div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p>观众评 <span class="grade">9.3</span></p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>今天56家影院放映443场</p>
        </div>
        <div class="btn_mall">
          购票
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
import { getToken } from "../../utils/auth";

export default {
  name: "Now",
  data() {
    return {
      page: 1,
      pagesize: 5,
      list: [],
      img_base_url: "http://localhost:8888/",
      movielist: [],
    };
  },
  computed: {},
  components: {},
  created() {
    this.getMovies();
  },
  mounted() {},
  methods: {
    getMovies() {
      // 方式一
      this.$http.get("/movies").then((res) => {
        // console.log(res);
        this.list = res.list;
        this.list.forEach((item) => {
          item.imgurl = this.img_base_url + item.imgurl;
        });
      });

      // 方式二
      // const start = this.page - 1 * this.pagesize; // 从第几条开始
      // const end = this.pagesize; // 查询多少条
      // this.$http.get(`/movies?start=${start}&end=${end}`).then((res) => {
      //   console.log(res);
      //   this.movielist= res.list
      // });
    },
    goLogin(id) {
      if (getToken()) {
        // 跳转到购票页面
        this.$router.push({
          path: "/ticket",
          query: {
            id: id,
          },
        });
      } else {
        alert("你还没登陆");
        this.$router.push({
          path: "/mine",
          query: {
            id: id,
          },
        });
      }
    },
    // 跳转到详情页
    goDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id,
        },
      });
    },
  },
};
</script>
<!--<style lang="scss" scoped>-->
<style scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>
