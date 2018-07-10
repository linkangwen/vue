new Vue({
  el: '#vue-app',
  data: {
   changColor:false,
   changLength:false
  },
  methods:{

  },
  computed:{
    compClasses:function(){
      return {
        changColor:this.changColor,
        changLength:this.changLength
      }
    }
  }
})