const bell = document.querySelector('.bellContainer');

 let i = 1;
setInterval(function(){
    i++;
   bell.setAttribute('data-content', i);
}, 2000);