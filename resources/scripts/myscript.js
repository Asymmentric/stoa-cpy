console.log("conn");
const regBtn=document.getElementById('mid-btn');
const regBtn1=document.getElementById('top-btn')
const modal=document.getElementById('ggl-form')
regBtn.addEventListener('click',()=>{
  console.log('clcic');
    if (modal.style.display!=='block') {
      modal.style.display='block';
    }else modal.style.display='none'
})
regBtn1.addEventListener('click',()=>{
  console.log('clcic');
    if (modal.style.display!=='block') {
      modal.style.display='block';
    }else modal.style.display='none'
})