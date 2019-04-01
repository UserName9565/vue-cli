<!--  -->
<template>
  <div>
      <el-input v-if="type==='input'" :value="elementV" placeholder="请输入内容"></el-input>
      <el-select filterable  v-if="type==='select'" v-model="value" placeholder="请选择">
        <el-option
        v-for="item in elementV"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props:['elementV','type'],
  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>