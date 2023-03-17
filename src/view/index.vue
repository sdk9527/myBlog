<template>
  <!-- 主要结构框架 -->
  <div class="common-layout">
    <el-container>
      <el-header height="100px"> Header content </el-header>
      <el-main style="background-color: aqua" class="main">
        Main content
      </el-main>
      <el-footer height="200px" style="background-color: blueviolet">
        Footer content
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.common-layout {
  .el-header {
    position: relative;
    background-color: yellowgreen;
  }
  .main {
    height: 3000px;
  }
}
</style>