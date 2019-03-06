<template>
  <el-dialog title="审核详情" :visible.sync="visible" >
    <el-table
      :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
     
      border
      stripe
      highlight-current-row="true"
      style="width: 100%"
    >
      <el-table-column align="center"  prop="date" label="操作时间" ></el-table-column>
      <el-table-column align="center"  prop="name" label="操作人" ></el-table-column>
      <el-table-column align="center"  prop="address" label="执行结果" ></el-table-column>
      <el-table-column align="center"  prop="address" label="反馈详情" ></el-table-column>
    </el-table>
      
  </el-dialog>
</template>

<script>
 
// import moment from 'moment';
// //import util from '@/util'
export default {
  data() {
    return {
       items:[],
      visible:false,
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙"
        }
      ],
      selectedRows: []
      
    };
  },
  created() {},
  methods: {
     init(id){
       this.visible = true;
     },
    doSearch() {
      this.$refs.searchReulstList.refresh();
    }
  }
};
</script>
