<template>
  <div id="TranslateForm">
    <form action="" v-on:submit="formSubmit">
      <input type="text" v-model="textToTranslate" placeholder="输入要翻译的内容">
      <select v-model="language">
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="ko">korear</option>
          <option value="ja">Janpenese</option>

      </select>
      <input type="submit" value="翻译">  
    </form>
  </div>
</template>

<script>


export default {
  name: 'TranslateForm',
  data:function(){
    return{
      textToTranslate:"",
      language:""
    }
  },
  methods:{
    formSubmit:function(e){
      this.$emit("formSubmit",this.textToTranslate,this.language);
      e.preventDefault();
    }
  },
  created:function(){
    this.language = "ja";
  },
  components: {
    
  }
}
</script>

<style>

</style>
