// color change ? 

const randomColor = function(){
    let color ='#';
    const hex = '0123456789ABCDEF';
    
    for(let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random() * 16)];
    }
  
       return color;
  
  
  }
  
  // console.log(Math.floor(Math.random() * 16));
  
   document.querySelector('#start').addEventListener('click', startChangingcolor);
  let IntervalID;
  function startChangingcolor(){
    document.body.style.backgroundColor=randomColor();
  
   IntervalID = setInterval(changeBgcolor,500);
    function changeBgcolor(){
      document.body.style.backgroundColor=randomColor();
    }
  };
  
  function stopchangingcolor(){
    clearInterval(IntervalID);
    IntervalID=null;
  }
  
  document.querySelector('#stop').addEventListener('click', stopchangingcolor);
  
  
  
     
  