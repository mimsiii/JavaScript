function swimFish(fishes){
    var topLocation=Math.random()*($(document).height()-50)+"px";
    var leftLocation=Math.random()*($(document).width()-50)+"px";
    var moveToTime=1000+Math.random()*1000;
    moveFish(fishes,topLocation,leftLocation,moveToTime);
}

function moveFish(fishes,topLocation,leftLocation,moveToTime){
    var newTopLocation = topLocation;
    var newLeftLocation = leftLocation;
    $("#"+fishes).animate({
        "top":newTopLocation,
        "left":newLeftLocation},
        moveToTime, function(){swimFish(fishes);
        });
}

var fishNumbers = Math.floor(Math.random(3,10)*((10-3+1)+3));

$(document).ready(function(){
    var fishes = new Array();
    fishes[0]="1.png";
    fishes[1]="2.png";
    fishes[2]="3.png";
    fishes[3]="4.png";
    fishes[4]="5.png";
    
    for(i=0;i<fishNumbers;i++){
        var randomFish = Math.floor(Math.random()*(4-0+1)+0)
        $("ul").append("<li id='fishes"+i+"'><img src='"+fishes[randomFish]+"'></li");
        swimFish("fishes"+i);
    }

    $("#wrapper").click(function(ev){
        $("li").each(function(){
            $(this).stop();
            setTimeout(moveFish($(this).attr("id"),ev.pageY,ev.pageX,1000),1000);
        });
    });
});