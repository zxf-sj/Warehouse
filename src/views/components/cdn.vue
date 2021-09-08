<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      @select="changeCelect"
      @select-all="changeCelectAll"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column type="expand">
        <template slot-scope="antProps">
          <Img
            :antProps="tablelist"
            :listSlect="listSlect"
            :multipleTable="antProps.row.id"
            :ref="antProps.row.id"
          />
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id"> </el-table-column>
      <el-table-column label="商品名称" prop="name"> </el-table-column>
      <el-table-column label="描述" prop="desc"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Img from "./chajian.vue";
export default {
  components: {
    Img,
  },
  data() {
    return {
      listSlect: "",
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
      ],
      oneChange: "",
      tablelist: {
        12987122: [
          {
            date: "2016-05-03",
            name: "table1",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-02",
            name: "table1",
            address: "上海市普陀区金沙江路 1518 弄",
          },
        ],
        12987123: [
          {
            date: "2016-05-03",
            name: "table2",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-02",
            name: "table2",
            address: "上海市普陀区金沙江路 1518 弄",
          },
        ],
      },
    };
  },
  methods: {
    changeCelect(res, row) {
      for (let i in res) {
        this.listSlect = res[i].id;
        this.$refs[res[i].id].dddd(res[i].id, true);
      }
      let noSelect = res.filter((item) => item.id == row.id);
      console.log(noSelect);
      if (noSelect.length == 0) {
        this.listSlect = row.id;
        this.$refs[row.id].dddd(row.id, false);
      }
    },
    changeCelectAll(res) {
      // if (res.length > 0) {
      //   this.oneChange = [];
      //   for (let i in res) {
      //     this.oneChange.push(res[i].id);
      //   }
      // } else {
      //   this.oneChange = [];
      // }
      console.log(res);
      if (res.length == 0) {
        let tableData = this.tableData;
        for (let i in tableData) {
          this.listSlect = tableData[i].id;
          this.$refs[tableData[i].id].dddd(tableData[i].id, false);
        }
      } else {
        for (let i in res) {
          this.listSlect = res[i].id;
          this.$refs[res[i].id].dddd(res[i].id, true);
        }
      }
    },
  },
};
</script>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>