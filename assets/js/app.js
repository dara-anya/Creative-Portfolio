$(document).ready(function(){

    /****Introduction Sequence****/
    var i = 0;
    var speed = 225; 
    var txt = "FADE IN:"
    function typeWriter1() {
        if (i < txt.length) {
            document.getElementById("fade-in-text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter1, speed);
        }
    }
    typeWriter1();

    $("#greeting").css("display", "none");
    setTimeout(function(){
        $("#greeting").css("display", "block");
    },2000);


    var j = 0;
    var txt2 = 'CUT TO:'; 
    var speed = 225; 

    function typeWriter2() {
        if (j < txt2.length) {
            document.getElementById("cut-to-text").innerHTML += txt2.charAt(j);
            j++;
            setTimeout(typeWriter2, speed);
        }
    }
    setTimeout(function(){
        typeWriter2();
    }, 6500);

    setTimeout(function(){
        $("body").css("background-color", "black");
        $(".introduction").css("display", "none");
    }, 9000);
 
    setTimeout(function(){
        $("body").css
    })
});

