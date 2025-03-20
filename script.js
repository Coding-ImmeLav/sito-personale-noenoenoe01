let a = 0; 

function compariMenu () {
    if (a == 0) {
        
        document.getElementById("menu").style.display ="inital";
        a = 1

    }
       

else if (a == 1) {
    document.getElementById("menu").style.display = "none";
    a = 0;
}
     
}