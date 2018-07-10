new Vue({
  el: '#vue-app',
  data: {
   name: 'Hello Vue!',
   web:"https://cn.vuejs.org/v2/guide/  ",
   tag:'<a href="https://cn.vuejs.org/v2/guide/">vue</a>'
  },
  methods:{
  	greet:function(time){
  		return ' good '+time+'!'+' '+this.name;
  	}
  }
})