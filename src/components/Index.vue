<template>
  <div id="mount-point">
    {{ msg }}
    <el-button @click="getMutations">默认按钮</el-button>
    <router-link to="test">
      <el-button> GO!!! </el-button>
    </router-link>
    <el-input
      width="200"
      placeholder="请输入内容"
      style="width: 140px"
    ></el-input>
    <el-select v-model="value" placeholder="请选择" :loading="isLoading">
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.level"
        :value="item.id"
      >
      </el-option>
    </el-select>
    {{ singer }}
    <el-main>
      {{ new Date() | formatDate }}
      <!-- {{ 1631088915 | formatDate }} -->
    </el-main>
  </div>
</template>
<script>
import { apiAddress } from "../request/api";
import { mapActions, mapMutations, mapState } from "vuex";
import { formatLocaleString } from "@/filter/data";
// import { formatDate } from "@/filter";
export default {
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatLocaleString(date, "yyyy-MM-dd hh:mm:ss");
    },
  },
  data() {
    return {
      msg: "jesycold",
      isLoading: false,
      options: [],
      value: 1,
      testList: [1, 2, 3, 4, 5],
    };
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    getMutations() {
      console.log("handleClick");
      this.SET_FULL_SCREEN("city");
    },
    // 获取数据
    onLoad() {
      let _that = this;
      this.isLoading = true;
      // 调用api接口，并且提供了两个参数
      apiAddress().then((res) => {
        this.isLoading = false;
        // 获取数据成功后的其他操作
        console.log(res);
        this.options = res.data;
        _that.$nextTick(function () {
          console.log("DOM现在更新了");
          console.log(this.options);
        });
        console.log("DOM现在没更新");
      });
    },
    ...mapMutations(["SET_FULL_SCREEN"]),
    ...mapActions(["setSinger"]),
  },
  computed: {
    ...mapState({
      singer: (state) => state.singer,
    }),
  },
};
</script>