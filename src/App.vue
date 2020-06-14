<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      user: ''
    }
  },
  methods: {
    //获取一个  0-9  的随机整数
    getRandom() {
      return Math.floor((Math.random())*10);
    },
    // 生成并设置一个动态路由的随机参数
    setUserParams() {
      this.user = '/lyDT:name' + ((this.getRandom()) * 36);
    },
    // 编程式路由实现
    LyBianCheng() {
      this.$router.push({path:'/lyBiancheng'})
    }
  },
  created() {
    this.setUserParams();
  },
  mounted() {
    
    
  }
}
</script>

<style>
@import url('./assets/reset.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;
  text-align: left;
  padding: 1rem 1.5rem;
}
a{
  display: block;
  font-size: 1.4rem;
}
.show-box{
    min-height: 30px;
    border: 1px solid #999;
    border-radius: 6px;
    overflow: hidden;
    padding: 10px;
    font-size: 32px;
    line-height: 2em;
    margin-top: 60px;
}
.bold{
  font-weight: bold;
}
.red {
  color: red;
}

</style>
