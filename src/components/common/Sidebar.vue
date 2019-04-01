<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#1a2634"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.url" :key="item.url">
                        <template slot="title">

                            <!-- <i :class="item.icon"></i> -->
                            <i class="iconfont" v-html="item.properties.cssClass"></i>
                            <!-- properties.cssClass -->
                            <span slot="title">{{ item.name }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.url" :key="subItem.url">
                                <template slot="title">{{ subItem.name }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.url">
                                    {{ threeItem.name }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.url" :key="subItem.url">
                                {{ subItem.name }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.url" :key="item.url">
                        <i :class="item.icon"></i><span slot="title">{{ item.name }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    // import menu from '../common/menu'
    export default {
        data() {
            return {
                collapse: false,
                items1: [
                    {
                        icon: 'el-icon-lx-home',
                        index: 'dashboard',
                        name: '系统首页'
                    },
                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'table',
                        name: '基础表格'
                    },
                    {
                        icon: 'el-icon-lx-copy',
                        index: 'tabs',
                        name: 'tab选项卡'
                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '3',
                        name: '表单相关',
                        subs: [
                            {
                                index: 'form',
                                name: '基本表单'
                            },
                            {
                                index: '3-2',
                                name: '三级菜单',
                                subs: [
                                    {
                                        index: 'editor',
                                        name: '富文本编辑器'
                                    },
                                    {
                                        index: 'markdown',
                                        name: 'markdown编辑器'
                                    },
                                ]
                            },
                            {
                                index: 'upload',
                                name: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-emoji',
                        index: 'icon',
                        name: '自定义图标'
                    },
                    {
                        icon: 'el-icon-lx-favor',
                        index: 'charts',
                        name: 'schart图表'
                    },
                    {
                        icon: 'el-icon-rank',
                        index: 'drag',
                        name: '拖拽列表'
                    },
                    {
                        icon: 'el-icon-lx-warn',
                        index: '6',
                        name: '错误处理',
                        subs: [
                            {
                                index: 'permission',
                                name: '权限测试'
                            },
                            {
                                index: '404',
                                name: '404页面'
                            }
                        ]
                    }
                ],
                items:[
                     
                ]
            }
            
        },
        methods:{
            menuCard(menu,id){
                var arr = [];
                var menuNew = menu.filter((item)=>{
                    if(!item.url){
                        item.url = item.id;
                    }
                    try {
                        
                        if(item.properties){
                            item.properties = JSON.parse(item.properties)
                        }
                    } catch (error) {
                        
                    }
                    return item.parentId ==id;
                })
                menuNew.forEach((item) => {
                    
                    var pA = haveSon(item);
                    if(pA.length>0){
                       
                        item.subs=pA;
                       
                        arr.push(item)
                    }
                })
                
                function haveSon(item){
                    var newSon = menu.filter((o)=>{
                     
                         
                        return o.parentId ==item.id;
                    })
                    if(newSon.length>0){
                          newSon.forEach((b)=>{
                            var pA = haveGSon(b);
                            if(pA.length>0){
                                b.subs=pA;

                            }
                          })
                    }
                    return newSon;
                    
                }
                function haveGSon(item){
                     var newSon = menu.filter((o)=>{
                        return o.parentId ==item.id;
                    })
                    return newSon;
                }
                this.items =  arr//.concat(this.items1);
                
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },

        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            //this.menuCard(menu);
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
            bus.$on('firstL',msg=>{
                let menu = this.$store.getters.getMenu;
                this.menuCard(menu,msg)
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
