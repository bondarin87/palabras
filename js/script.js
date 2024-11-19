let inp = document.querySelector('#elem');
let text =document.querySelector('#text');
let temp ='';
inp.addEventListener('blur',function func() {
    let arr = inp.value.split(''); 
   
    for (let i=arr.length-1; i>=0; i--) {
       
        temp = temp + arr[i];
   
    } 
    if (inp.value === temp){
        text.textContent = 'Muy bien!!!';
    } else {
        text.textContent = 'Intenta otra vez!'
    }
     
    
})
