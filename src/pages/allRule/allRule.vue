<template>
   <div>
     <!--{{ $route.name}}-->
     <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit" @tab-click="handleClick">
       <el-tab-pane key="0" label="我的任务" name="0" :closable=true>
         固定值
       </el-tab-pane>
       <el-tab-pane
         :key="item.name"
         v-for="item in editableTabs"
         :label="item.title"
         :name="item.name"
       >
         {{item.content}}
       </el-tab-pane>
     </el-tabs>
   </div>
</template>
<script>
export default {
  name: 'allRule',
  components: {
  },
  data () {
    return {
      editableTabsValue: '0',
      editableTabs: [],
      tabIndex: 0
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab)
      console.log(event)
    },
    handleTabsEdit (targetName, action) {
      console.log(action)
      if (action === 'add') {
        let newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          title: '新建规则',
          name: newTabName,
          content: 'New Tab content'
        })
        this.editableTabsValue = newTabName
      }
      if (action === 'remove') {
        let tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .el-tabs /deep/ .el-tabs__item:nth-child(1) .el-icon-close{
    display: none;
  }

</style>
