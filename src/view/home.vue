<template>
  <div class="container">
    <div class="describe">
      <h1>小土豆</h1>
      <p>剑气纵横三万里,一剑光寒十九洲</p>
      <div class="enter">
        <div @click="enterBlog">
          <router-link to="/layout">Enter Blog</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  background: url(../src/assets/wallhaven-l3z9rp.jpg);
  background-size: 100% 100%;
  background-position: 50% 50%;
  background-attachment: fixed;
  overflow: auto;
  background-size: cover;
  .describe {
    color: white;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 20px;
    }
    .enter {
      margin-top: 30px;
      width: 100px;
      height: 30px;
      border: 1px solid #72dcb8ed;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #72dcb8ed;
      color: white;
      cursor: pointer;
      // 去除a链接默认样式
      a {
        text-decoration: none;
        color: white;
      }
      .router-link-active {
        text-decoration: none;
      }
    }
  }
}
</style>