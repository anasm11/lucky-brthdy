alert('Privacy Notice: We are not storing any data.')

const btn=document.querySelector('button');
const date=document.querySelector('#date');
const number=document.querySelector('#number');
const output=document.querySelector('#output');

btn.addEventListener('click',()=>{
  console.log('clicked btton')
  if(!date.value || !number.value)
    output.innerHTML='pls enter all the fields';

  else{
    dateArr=date.value.replaceAll('-','');
    
    let sum=0;
    for(let i=0;i<dateArr.length;i++){
      sum+=Number(dateArr[i]);
    }

    if(sum%number.value==0){
      output.style.fontSize='large';
      output.style.color='blue';
      output.innerHTML='🥳 Yaas! Your birthday is lucky! 🎊'
    }
    else{
      output.innerHTML='Your birthday is not lucky :('
    }

  }
})
