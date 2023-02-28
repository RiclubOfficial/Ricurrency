document.addEventListener("contextmenu", function(e){
    e.preventDefault();
    var img = e.target;
    img.insertAdjacentHTML('beforeend');
    var customMenu = document.getElementById('custom-menu');
    customMenu.style.left = e.pageX + "px";
    customMenu.style.top = e.pageY + "px";
    customMenu.addEventListener("click", function(e){
       e.preventDefault();
       customMenu.remove();
    });
 });
 