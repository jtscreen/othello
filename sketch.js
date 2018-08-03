let x = 0;
let y = 0;
let arr = []; 
let turn = [[true], [false]]
blackCount = 2;
whiteCount = 2;

for(let i = 0; i < 8; i++){
    arr.push([null, null, null, null, null,null,null,null])
}
//Black is false, white is true
function setup(){
    createCanvas(801,801);
    arr[3][3] = false;
    arr[3][4] = true;
    arr[4][3] = true;
    arr[4][4] = false;
}

function draw(){
    fill("green")
    n = 0
    while(n < 8){
        for(let i = 0; i<8; i++){
            rect(x,y,100,100);
            x += 100
        }
        x = 0
        y += 100;
        n++;
    }
    fill("black")
    ellipse(450,450,75,75);
    ellipse(350,350,75,75);
    fill("white");
    ellipse(350,450,75,75);
    ellipse(450,350,75,75);
}

function mouseClicked(){
    //first row
    piece(0,0,0,0,0,0);
    piece(100,0,100,0,0,1);
    piece(200,0,200,0,0,2);
    piece(300,0,300,0,0,3);
    piece(400,0,400,0,0,4);
    piece(500,0,500,0,0,5);
    piece(600,0,600,0,0,6);
    piece(700,0,700,0,0,7);

    //second row
    piece(0,100,0,100,1,0);
    piece(100,100,100,100,1,1);
    piece(200,100,200,100,1,2);
    piece(300,100,300,100,1,3);
    piece(400,100,400,100,1,4);
    piece(500,100,500,100,1,5);
    piece(600,100,600,100,1,6);
    piece(700,100,700,100,1,7);

    //third row
    piece(0,200,0,200,2,0);
    piece(100,200,100,200,2,1);
    piece(200,200,200,200,2,2);
    piece(300,200,300,200,2,3);
    piece(400,200,400,200,2,4);
    piece(500,200,500,200,2,5);
    piece(600,200,600,200,2,6);
    piece(700,200,700,200,2,7);

    //fourth row
    piece(0,300,0,300,3,0);
    piece(100,300,100,300,3,1);
    piece(200,300,200,300,3,2);
    piece(500,300,500,300,3,5);
    piece(600,300,600,300,3,6);
    piece(700,300,700,300,3,7);

    //fifth row
    piece(0,400,0,400,4,0);
    piece(100,400,100,400,4,1);
    piece(200,400,200,400,4,2);
    piece(500,400,500,400,4,5);
    piece(600,400,600,400,4,6);
    piece(700,400,700,400,4,7);

    //sixth row
    piece(0,500,0,500,5,0);
    piece(100,500,100,500,5,1);
    piece(200,500,200,500,5,2);
    piece(300,500,300,500,5,3);
    piece(400,500,400,500,5,4);
    piece(500,500,500,500,5,5);
    piece(600,500,600,500,5,6);
    piece(700,500,700,500,5,7);

    //seventh row
    piece(0,600,0,600,6,0);
    piece(100,600,100,600,6,1);
    piece(200,600,200,600,6,2);
    piece(300,600,300,600,6,3);
    piece(400,600,400,600,6,4);
    piece(500,600,500,600,6,5);
    piece(600,600,600,600,6,6);
    piece(700,600,700,600,6,7);

    //eigth row
    piece(0,700,0,700,7,0);
    piece(100,700,100,700,7,1);
    piece(200,700,200,700,7,2);
    piece(300,700,300,700,7,3);
    piece(400,700,400,700,7,4);
    piece(500,700,500,700,7,5);
    piece(600,700,600,700,7,6);
    piece(700,700,700,700,7,7);

    
}

function piece(x, y, placeX, placeY, index1,index2){
    if(mouseX>x && mouseX<(x+100) && mouseY>y && mouseY<(y+100) && turn[0] && arr[index1][index2]==null){
        fill("white");
        ellipse(placeX+50,placeY+50,75,75);
        arr[index1][index2] = true;
        turn[0] = false;
        turn[1] = true;
    }else if(mouseX>x && mouseX<(x+100) && mouseY>y && mouseY<(y+100) && turn[1] && arr[index1][index2]==null){
        fill("black");
        ellipse(placeX+50,placeY+50,75,75);
        arr[index1][index2] = true;
        turn[0] = true;
        turn[1] = false;
    }
    console.log(arr)
    // if(arr[index1][index2] == arr[index1-2][index2]){
    //     (arr[index1-1][index2]) = true;
    //     fill("white");
    //     ellipse(placeX+50,placeY+50,75,75);
    // }
    console.log(index1)
    console.log(index2)

}