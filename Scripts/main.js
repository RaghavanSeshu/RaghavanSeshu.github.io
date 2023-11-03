// const changeHeading=document.querySelector("h2");
// changeHeading.textContent="RaghavaNandana";

// document.querySelector("html").addEventListener("click",function(){
//     alert("Stop Poking me..!");
// });

// Change Image on click of it
const imgvar=document.querySelector("img");

imgvar.onclick=()=>{
    const imgsrc=imgvar.getAttribute("src");
    //alert(imgsrc);
    if(imgsrc === "Images/love-heart-young-couple.jpg")
    {
        imgvar.setAttribute("src","Images/celiot1.jpg")
    }else{
        imgvar.setAttribute("src","Images/love-heart-young-couple.jpg");
    }
};