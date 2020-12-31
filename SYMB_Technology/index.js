window.onresize = function() {
   if(screen.width < 430) {
       document.getElementById('profile').style.display = 'none';
   } else {
       document.getElementById('profile').style.display = 'block';
   }
}

window.onload = function(){
  if(screen.width < 430) {
       document.getElementById('profile').style.display = 'none';
   } else {
       document.getElementById('profile').style.display = 'block';
   }
}