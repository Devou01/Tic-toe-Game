 let turn = "X"
 let gameover = false;




 // function to chnge the turn
 function chngeturn(){
    return turn === "X" ? "0" : "X";
 }



 // function to check win

 function checkWin(){
    let boxtexts = document.getElementsByClassName("boxtext")
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(e =>{
        if(
            (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")
            )
            {

            boxtexts[e[0]].style.color = "green"
            boxtexts[e[1]].style.color = "green"
            boxtexts[e[2]].style.color = "green"

            document.querySelector(".info").style.color = "green"
            // document.querySelector(".info").innerHTML = boxtexts[e[0]].innerText + " Won";
            document.querySelector(".info").innerHTML = " Zeeshan Won";
            gameover = true;
        }
    })

 }


//  Game logic

let boxes = document.querySelectorAll(".box")

boxes.forEach(element =>{
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = chngeturn()
            checkWin()
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }
           
        }

    })
})

let reset = document.getElementById("reset")


// Reset game

reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll(".boxtext")
    boxtext.forEach((e)=>{
        e.innerHTML = ""
        turn = "X"
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.getElementsByClassName("info")[0].style.color = "black";
        gameover = false
        e.style.color = "black"
        // boxtexts[e[0]].style.color = "black"
        // boxtexts[e[1]].style.color = "black"
        // boxtexts[e[2]].style.color = "black"

    })

})

