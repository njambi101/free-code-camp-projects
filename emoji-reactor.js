

//Number(count.textContent.split("/")[0])

//console.log(typeof newCount)



function updateCount (btn){
    const count = btn.querySelector(".count"); 
    let newCount = +count.textContent.split("/")[0];
      if(newCount === 10) return;
   
    newCount ++;
    count.textContent = `${newCount}/10`;

   }
const btns = document.querySelectorAll(".emoji-btn")
btns.forEach((b) =>b.addEventListener("click", () => updateCount(b)))
/*const happyBtn = document.querySelector("#happy-btn");
happyBtn.addEventListener("click", () => updateCount(happyBtn));

const confusedBtn = document.querySelector("#confused-btn");

confusedBtn.addEventListener("click", () => updateCount(confusedBtn));

const sadBtn = document.querySelector("#sad-btn");
sadBtn.addEventListener("click", () => updateCount(sadBtn))

const lovingBtn = document.querySelector("#loving-btn");
lovingBtn.addEventListener("click", () => updateCount(lovingBtn))

    //let nextCount = Number(newCount[0])
 */
