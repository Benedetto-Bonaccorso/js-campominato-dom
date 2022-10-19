let container = document.querySelector(".container")

let maxCells;

let cellList;

let difficulty = 0

let bombs = []

let bomb;

let maxBombs = 16

let points = 0

let gameOn = true

function easy(){
    if(difficulty == 0){
        difficulty = 1
        maxCells = 100
        caselleGenerator(maxCells,container)
        bombPlacer()
    }
}

function medium(){
    if(difficulty == 0){
        difficulty = 2
        maxCells = 81
        caselleGenerator(maxCells,container)
        bombPlacer()
    }
}

function hard(){
    if(difficulty == 0){
        difficulty = 3
        maxCells = 49
        caselleGenerator(maxCells,container)
        bombPlacer()
    }
}

function caselleGenerator(maxCells,container){

    if(difficulty == 1){
        for(let i = 0; i < maxCells; i++){
            cellList = document.getElementsByClassName("cell10")
            container.innerHTML += `<div class="cell10" id="${i}">${i + 1}</div>`
        }
    } else if(difficulty == 2){
        for(let i = 0; i < maxCells; i++){
            cellList = document.getElementsByClassName("cell9")
            container.innerHTML += `<div class="cell9" id="${i}">${i + 1}</div>`
        }
    } else if(difficulty == 3){
        for(let i = 0; i < maxCells; i++){
            cellList = document.getElementsByClassName("cell7")
            container.innerHTML += `<div class="cell7" id="${i}">${i + 1}</div>`
        }
    }
    

        for(let i = 0; i < cellList.length; i++){
            let currentCell = cellList[i]
            currentCell.addEventListener("click", function(){

                if(bombs.includes(Number(currentCell.id)) && gameOn == true){
                    currentCell.classList.toggle("red")
                    gameOver()
                } else if(!bombs.includes(Number(currentCell.id)) && gameOn == true) {
                    currentCell.classList.toggle("aqua")
                    points++
                }

                if(points == maxCells){
                    gameOver()
                }

                console.log(currentCell.id)
            })
        }
}

function bombPlacer(){
    for(let i = 0; i < maxBombs; i++){

        bomb = Math.floor(Math.random()*maxCells + 1)

        if(!bombs.includes(bomb)){
            bombs.push(bomb)
        } else {
            i--
        }

    }
}

function gameOver(){

    if(points < maxCells){
        console.log(points)
        gameOn = false
        alert("you have totalized " + points + " Points, refresh the page to retry")
    } else {
        gameOn = false
        alert("you have Won!")
    }
}
