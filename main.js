let container = document.querySelector(".container")

let maxCells;

let cellList;

let difficulty = 0

function easy(){
    if(difficulty == 0){
        difficulty = 1
        maxCells = 100
        caselleGenerator(maxCells,container)
    }
}

function medium(){
    if(difficulty == 0){
        difficulty = 2
        maxCells = 81
        caselleGenerator(maxCells,container)
    }
}

function hard(){
    if(difficulty == 0){
        difficulty = 3
        maxCells = 49
        caselleGenerator(maxCells,container)
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
            currentCell.classList.toggle("aqua")
            console.log(currentCell.id)
        })
    }
}