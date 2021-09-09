<template>
  <div>
    <el-table
      :data="antProps[multipleTable]"
      :ref="multipleTable"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ["antProps", "listSlect", "multipleTable"],
  data() {
    return {};
  },
  watch: {
    multipleTable: {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },
  mounted() {
    console.log(this.antProps);
  },
  methods: {
    dddd(val, flag) {
      console.log(flag);
      // this.antProps[val].forEach((row) => {
      //   this.$refs[val].toggleRowSelection(row, flag);
      // });
      //改造后的for循环  是所有数组遍历方式里速度最快的
      for (let j = 0, len = this.antProps[val].length; j < len; j++) {
        this.$refs[val].toggleRowSelection(this.antProps[val][j], flag);
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>