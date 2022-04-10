// document.getElementById("#roll").addEventListener("click",myFunction);
// document.getElementsByTagName("button").innerHTML ="lll"
function random(min, max) {
    return min + Math.random() * (max - min);
  }

//   function smallest(x, y, z)
// {
//     let c = 0;
//     while (x && y && z) {
//         x--;
//         y--;
//         z--;
//         c++;
//     }
//     let randomArr = [x,y,z]
//     let ind = 0
//     for(let i=0;i<3;i++){
//         if(c===randomArr[i]){
//           ind = i
//           break
//         }
//     }
//     // const idName = `member-${i+1}`
//     return `member-${ind+1}`;
// }
function myFunction (){
    let randomNum1 = Math.floor(random(1,7))
    console.log("ran",randomNum1)
  document.getElementById("member-1").innerHTML=randomNum1
 let randomNum2 = Math.floor(random(1,7))
  document.getElementById("member-2").innerHTML=randomNum2
 let randomNum3 = Math.floor(random(1,7))
  document.getElementById("member-3").innerHTML=randomNum3


const maximum = Math.max(randomNum1,randomNum2,randomNum3)
const minimum = Math.min(randomNum1,randomNum2,randomNum3)

const comp1st = maximum ===  randomNum1 ? 1 :maximum === randomNum2 ? 2 : 3
const comp3rd = minimum ===  randomNum1 ? 1 :minimum === randomNum2 ? 2 : 3
const compMid = comp1st === 1 && comp3rd === 3 ? 2 :
comp1st === 2 && comp3rd === 3 ? 1 : 3
console.log(comp1st,compMid,comp3rd)
document.getElementById("winner").innerHTML="winner" + maximum
const common13 = randomNum1 === randomNum3
const common12 = randomNum1 === randomNum2
const common23 = randomNum2 === randomNum3
    var elem = document.getElementById(`member-${comp1st}`);
    var elem3rd = document.getElementById(`member-${comp3rd}`);
var elemMid = document.getElementById(`member-${compMid}`)
if(common12  && common13 && common23){
    
    elem.style.background = "blue";
    elemMid.style.background = "blue";
    elem3rd.style.background = "blue";
}
else if(common13){
    
    elem.style.background = "blue";
    elem3rd.style.background = "blue";
}
else if(common12){
    
    elem.style.background = "blue";
    elemMid.style.background = "blue";
}
else if(common23){
    
    elemMid.style.background = "blue";
    elem3rd.style.background = "blue";
}
else{
    
    elem.style.background = "green";
    elem3rd.style.background = "red";
    elemMid.style.background = "yellow"
}

}