// https://uploads.sitepoint.com/wp-content/uploads/2021/09/1632727310react-calculator-app.jpg

let string=''
let btn=document.querySelectorAll('.item')
Array.from(btn).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    try{
    if(e.target.innerHTML=='='){
        string=eval(string);
        inp.value=string;        
    }
   else if(e.target.innerHTML=='C'){
        string=''
        inp.value=string;        
    }
   else if(e.target.innerHTML=='Del'){
        pstring=inp.value.split('');
        pstring.pop()
        string=pstring;
        inp.value=pstring.join('');        
    }
    else{
    string+=e.target.innerHTML;
    inp.value=string;
    }
    }
    catch{
      string='Err';
      inp.value=string;
    }
  })
});