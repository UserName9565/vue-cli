
<template>
<el-dialog @close="close" ref='dailog' title="流程设计" :close-on-click-modal="false"  :visible.sync="visible" width="80%" height="100%">
  <div>
    <iframe :src="designSrc" id="show-iframe" frameborder=0 name="showHere" scrolling=auto :height="iframeHeight" width="100%" />
  </div>
</el-dialog>
</template>

<script>
export default {
  data() {
    return {
      designSrc: null,
      visible: false, title:"添加",
      disabled:false,
      btn:"提交",
      aproveVisible: false,
      iframeHeight:'800px', 
    };
  },
  created() {


  },
  activated() {},
  mounted(){
  this.$nextTick(() => {
      //const deviceWidth = document.documentElement.clientWidth;
      const deviceHeight = document.documentElement.clientHeight;
      this.iframeHeight = (deviceHeight-125) + 'px';
    })
},
  methods: {
    init(id) {
      this.visible = true;
      this.designSrc =this.common.ctx+ this.$url.workflowdef.modeler+id;// window.SITE_CONFIG.wfDesingUrl + id;
    },
    close(){
      this.$parent.doSearch(1)
    }
  }
  }
  </script>
