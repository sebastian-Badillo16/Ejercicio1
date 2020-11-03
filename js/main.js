var app = new Vue({
    el: '#app',
    data: {
      number1:0,
      number2:0,  
      answer:0
    },
    methods: {
        add:function(){
        this.answer=parseInt(this.number1) + parseInt(this.number2)
        

        },
        substrack:function(){
            this.answer=parseInt(this.number1) - parseInt(this.number2)
            
        },
        multiply:function(){
            this.answer=parseInt(this.number1) * parseInt(this.number2)
            
        }
    },
  })