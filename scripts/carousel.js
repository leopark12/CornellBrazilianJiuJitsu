$(document).ready(function() {

  const img_con = document.getElementById('carousel-image');

  //store array of images
  const images = ['carousel-1.jpg', 'carousel-2.jpg', 'carousel-3.jpg', 'carousel-4.jpg']

  let i = 1;

  // function for next slide
  $("#next").on("click", function(){

    if(i < images.length){
      i = i+1;
    }else{
      i=1;
    }

    img_con.src = "images/"+images[i-1];
  });

  // function for prew slide
  $("#prev").on("click", function(){
    if(i < images.length){
      i = i+1;
    }else{
      i=1;
    }
    img_con.src = "images/"+images[i-1];
  });


});
