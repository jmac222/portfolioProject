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

$(function(){

  //settings for slider
  let width = 720;
  let animationSpeed = 2000;
  let pause = 2500; //200 + 500 delay
  //cache DOM Elements
  let $slideContainer = $(`.slides`);
  let $slides = $(`.slide`);

  let interval;
  let currentSlide = 1;

  let r1 = Math.floor(Math.random * 255);
  let r2 = Math.floor(Math.random * 255);
  let r3 = Math.floor(Math.random * 255);
  

  //create fuction that starts slider
  function startSlider(){
      interval = setInterval(function(){
          //animating the slide container will cause the action in the function to hapen every delay
          $slideContainer.animate({'margin-left': `-=${width}`},
          animationSpeed,
          function(){
              currentSlide++;
              if(currentSlide == $slides.length){
                  currentSlide = 1;
                  $slideContainer.css('margin-left', 0);
              }
          })
      }, pause);
  }
  function pauseSlider(){
      clearInterval(interval);

  }
  startSlider();

  $slideContainer
      .on(`mouseenter`, pauseSlider)
      .on(`mouseleave`, startSlider);

});