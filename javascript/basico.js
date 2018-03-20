function ME(){
    var mayoredad = confirm("¿eres mayor de edad?");
    if (mayoredad == true) {
        document.oncontextmenu = document.body.oncontextmenu = function() {return false;};
        //molestar();
    } else {
        console.log("no");
        location.href ="https://www.google.es";
    }
}

function molestar() {
    setInterval(function()
    { 
      alert("molestar"); 
    }, 1000);
   
}



contador=1;
function plusSlidesMAS(){
contador++;
    if (contador==4)
        {contador=1;
        document.getElementById("fuente").src = "https://www.w3schools.com/howto/img_mountains_wide.jpg"
        }
    else if(contador==2){
        document.getElementById("fuente").src = "https://www.w3schools.com/howto/img_nature_wide.jpg"
    }
    else if(contador==3){
        document.getElementById("fuente").src = "https://www.w3schools.com/howto/img_fjords_wide.jpg"
    }
}
    function plusSlidesMENOS(){
contador--;
    if (contador==0)
        {contador=3;
        document.getElementById("fuente").src = "https://www.w3schools.com/howto/img_fjords_wide.jpg"
        }
    else if(contador==2){
        document.getElementById("fuente").src = "https://www.w3schools.com/howto/img_nature_wide.jpg"
    }
    else if(contador==1){
        document.getElementById("fuente").src = "https://www.w3schools.com/howto/img_mountains_wide.jpg"
    }
}









function acceder(){
    var usermaster="admin";
    var passwordmaster="admin";
    
    var user  = $("#user").val().toLowerCase();
    var password = $("#passsword").val().toLowerCase();
  
            if (user==usermaster && password==passwordmaster) {
                document.cookie = "token_123456";
                document.getElementById("mensaje").innerHTML="sucess";
            } 
            else {
                document.getElementById("mensaje").innerHTML="error";
            }
    }