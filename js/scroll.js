
    var cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("demo").innerHTML = cars[0];

function scrollFirst() {
    // window.scrollTo(0, window.innerHeight);
    var timerID = setInterval(function() {
    window.scrollBy(0, 10);

    if( window.pageYOffset >= window.innerHeight )
        clearInterval(timerID);
	}, 8);

	// document.getElementById("scrollbox1").style.top = "100vh";
};

function scrollSecond() {
    var timerID = setInterval(function() {
    window.scrollBy(0, 10);

    if( window.pageYOffset >= window.innerHeight*2 )
        clearInterval(timerID);
	}, 8);
}

function scrollThird() {
    var timerID = setInterval(function() {
    window.scrollBy(0, 10);

    if( window.pageYOffset >= window.innerHeight*3 )
        clearInterval(timerID);
	}, 8);
}

function scrollForth() {
    var timerID = setInterval(function() {
    window.scrollBy(0, -20);

    if( window.pageYOffset <= 0 )
        clearInterval(timerID);
	}, 8);
}

var myTimer = setInterval(wordSwap, 1000);


var cars = [
    "Saab",
    "Volvo",
    "BMW"
];

var x = 0


function myWords(){
    // wordStage = wordStage + 1;
    // if(x<= 2){
    //     x = x + 1;
    // } else if(x>=3){
    //     x = 0;
    // }
    // wordSwap();
}


function wordSwap(){

    var arrayLength = cars.length;
    for (var i = 0; i < arrayLength) {
        if(i > arrayLength){
            i=0;
        }
    //Do something
                i++;


    document.getElementById("demo").innerHTML = cars[i];
            location.reload();


    }
}





