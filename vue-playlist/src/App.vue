<template>
  <div id="app">
    <app-header @titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>

// 局部注册组件
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
    return {
      users:[
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false},
        {name:"kaven",position:"web开发",show:false}
      ],
      title:"传值"
    }
  },
  methods:{
    updateTitle(e){
      this.title=e;
    }
  },
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  }
}
</script>

<style>
h1{
  color: red;
}
</style>
