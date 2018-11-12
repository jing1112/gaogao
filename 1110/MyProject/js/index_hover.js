var parents=document.querySelectorAll(".yellow_hover");
for(var i = 0;i<parents.length;i++){
  var parent=parents[i];
  parent.onmouseenter = function(){
    this.children[1].style.display="block";
  };
  parent.onmouseleave = function(){
    this.children[1].style.display="none";
  };
}