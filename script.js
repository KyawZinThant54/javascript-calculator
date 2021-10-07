let buttons =document.getElementsByTagName('input');
let mainValue = document.getElementById('mainValue');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        if(mainValue.value == "0"){
            mainValue.value= this.value
        }else 
            switch(this.value){
                case "AC":
                    mainValue.value='';
                    break;
                case "=":
                    mainValue.value =eval(mainValue.value);
                    break;
                default:
                    mainValue.value +=this.value;


            }  
                
    })
}





