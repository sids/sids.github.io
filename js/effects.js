$(document).ready(function(){

    $("#blogs a").fadeTo("slow", 0.8);
    $("#blogs a").hover(function(){
        $(this).fadeTo("slow", 1.0);
    },function(){
        $(this).fadeTo("slow", 0.8);
    });

    $("#social a").fadeTo("slow", 0.6);
    $("#social a").hover(function(){
        $(this).fadeTo("slow", 1.0);
    },function(){
        $(this).fadeTo("slow", 0.8);
    });
});
