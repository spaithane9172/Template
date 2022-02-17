let colorsbox=document.querySelector(".colors");
let dthemebtn1=document.querySelector(".themebtn1");
let dthemebtn=document.querySelector(".themebtn");
let header=document.querySelector("#header");
let chartbox=document.querySelector(".chart");
let sectionHead=document.querySelector(".section-head");
let newsbox=document.querySelector(".news-box");
let lihover=document.querySelector(".lihover");

function themes(){
    dthemebtn.style.display="none";
    dthemebtn1.style.display="block";
    colorsbox.style.display="flex";
}
function themes1(){
    colorsbox.style.display="none";
    dthemebtn.style.display="block";
    dthemebtn1.style.display="none";
}

function btn1(){
    localStorage.setItem('color','black');
    dthemebtn1.style.display="none";
    dthemebtn.style.display="block";
    colorsbox.style.display="none";

    header.style.background="black";
    dthemebtn.style.background="black";
    dthemebtn1.style.background="black";
    document.body.style.background=" rgba(0, 0, 0, 0.7)";
    sectionHead.style.color="white";
    chartbox.style.color="white";
    newsbox.style.color="white";
}
function btn2(){
    localStorage.setItem('color','alizarin');
    dthemebtn1.style.display="none";
    dthemebtn.style.display="block";
    colorsbox.style.display="none";
    header.style.background="#e74c3c";
    dthemebtn.style.background="#e74c3c";
    dthemebtn1.style.background="#e74c3c";
    document.body.style.background="white";
    sectionHead.style.color="black";
    chartbox.style.color="black";
    newsbox.style.color="black";
}
function btn3(){
    localStorage.setItem('color','peter-river');
    dthemebtn1.style.display="none";
    dthemebtn.style.display="block";
    colorsbox.style.display="none";

    header.style.background="#3498db";
    dthemebtn.style.background="#3498db";
    dthemebtn1.style.background="#3498db";
    document.body.style.background="rgba(52, 152, 219,0.7)";
    sectionHead.style.color="black";
    chartbox.style.color="black";
    newsbox.style.color="black";
}
function btn4(){
    localStorage.setItem('color','amethyst');
    dthemebtn1.style.display="none";
    dthemebtn.style.display="block";
    colorsbox.style.display="none";

    header.style.background="#9b59b6";
    dthemebtn.style.background="#9b59b6";
    dthemebtn1.style.background="#9b59b6";
    document.body.style.background="rgba(155, 89, 182,0.7)";
    sectionHead.style.color="black";
    chartbox.style.color="black";
    newsbox.style.color="black";
}
function btn5(){
    localStorage.setItem('color','wet-asphalt');
    dthemebtn1.style.display="none";
    dthemebtn.style.display="block";
    colorsbox.style.display="none";

    header.style.background="#34495e";
    dthemebtn.style.background="#34495e";
    dthemebtn1.style.background="#34495e";
    document.body.style.background="rgba(52, 73, 94,0.7)";
    sectionHead.style.color="white";
    chartbox.style.color="white";
    newsbox.style.color="white";
}
function btn6(){
    localStorage.setItem('color','turquoise');
    dthemebtn1.style.display="none";
    dthemebtn.style.display="block";
    colorsbox.style.display="none";

    header.style.background="#1abc9c";
    dthemebtn.style.background="#1abc9c";
    dthemebtn1.style.background="#1abc9c";
    document.body.style.background="rgba(26, 188, 156,0.7)";
    lihover.style.background="rgba(26, 188, 156,0.7)";
    sectionHead.style.color="white";
    chartbox.style.color="white";
    newsbox.style.color="white";
}



if(window.localStorage.getItem('color')=="black"){
    btn1();
}
else if(window.localStorage.getItem('color')=="alizarin"){
    btn2();
}
else if(window.localStorage.getItem('color')=="peter-river"){
    btn3();
}
else if(window.localStorage.getItem('color')=="amethyst"){
    btn4();
}
else if(window.localStorage.getItem('color')=="wet-asphalt"){
    btn5();
}
else if(window.localStorage.getItem('color')=="turquoise"){
    btn6();
}