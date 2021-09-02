<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="$route.path" router>
          <el-submenu index="1">
            <template slot="title">选项1</template>
            <el-menu-item index="/test/list">选项1-1</el-menu-item>
            <el-menu-item index="/test/imgDom">选项1-2</el-menu-item>
            <el-submenu index="1-3">
              <template slot="title">选项1-3</template>
              <el-menu-item index="/test/demoTest">选项1-3-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <component :is="defaultActive"></component>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import list from "./components/List.vue";
import imgDom from "./components/Img.vue";
import demoTest from "./components/DemoTest.vue";
export default {
  components: {
    list,
    imgDom,
    demoTest,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    defaultActive() {
      return this.$route.path.split("/").reverse()[0];
    },
  },
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>