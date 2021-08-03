var x = [
    "Untitled_Artwork.png",
    "Untitled_Artwork copy.png",
    "Untitled_Artwork copy 2.png",
    "Dog.png",
    "https://images-na.ssl-images-amazon.com/images/I/51wZfvZev-L._SX258_BO1,204,203,200_.jpg"
  ];
  var t = [
    "My Dad(Patrick)",
    "My Mom(Maria)",
    "Me(Alex)",
    "My Dog(Brownie)",
    "My Family"
  ];
  var i=0; 

  
  function next(){
    if(i==5){
     i = 0;
    }
    document.getElementById("family").
    src = x[i];
    i++;

  }