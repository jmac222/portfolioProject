function autoType(elementClass, typingSpeed){
  var htmlClass = $(elementClass);
  htmlClass.css({
    "position": "relative",
    "display": "inline-block"
  });
  htmlClass.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  htmlClass = htmlClass.find(".text-js");
  var text = htmlClass.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  htmlClass.text("|");
  setTimeout(function(){
    htmlClass.css("opacity",1);
    htmlClass.prev().removeAttr("style");
    htmlClass.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          htmlClass.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}

$(function(){
  autoType(".text-js", 300)
})