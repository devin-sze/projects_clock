

function clockMain() {
    generateTimes();
    setStartTime();
    doTime();
}




function generateTimes() {
    generateTime("hr0", 2);
    generateTime("hr1", 9);
    generateTime("min0", 5);
    generateTime("min1", 9);
    generateTime("sec0", 5);
    generateTime("sec1", 9);
}


function generateTime(id, max) {
    let holder = document.getElementById(id);
    for (let i = 0; i <= max; i++) {
        

        square = document.createElement('div');
        square.innerHTML = i;
        square.id = "dig";
        if (i == 0) {
            square.className = "top";   
        } else if (i == max) {
            square.className = "bottom";
        }
        //square.className = "";
        holder.appendChild(square);
        
    }
}




