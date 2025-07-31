const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");
btn.forEach((button)=>{
    //  console.log(button);
button.addEventListener("click",(e)=>{
      // console.log(e);
      console.log(e.target);
       console.log(e.target.id);
    //    if(e.target.id === "grey"){
    //     body.style.backgroundColor = e.target.id;
    //    }
    //     if(e.target.id === "white"){
    //     body.style.backgroundColor = e.target.id;
    //    }
    //     if(e.target.id === "blue"){
    //     body.style.backgroundColor = e.target.id;
    //    }
    //    if(e.target.id === "yellow"){
    //     body.style.backgroundColor = e.target.id;
    //    }

    // Another Way to Execute same functionality
   switch (e.target.id) {
  case "grey":       // if(e.target.id === "grey")
  case "white":  
  case "blue":
  case "yellow":
    body.style.backgroundColor = e.target.id;
    break;

  default:
    // Optional: handle other cases or do nothing
    break;
}

     
})
})