document.addEventListener("keydown",(e)=>{
  const elem=document.querySelector(`#key-${e.keyCode}`)
  if(elem)
  {
    elem.classList.add("translate-y-1","shadow-xl","shadow-pink-100")
  }
});
document.addEventListener("keyup",(e)=>{
  const elem=document.querySelector(`#key-${e.keyCode}`)
  if(elem)
  {
    elem.classList.remove("translate-y-1","shadow-xl","shadow-pink-100")
  }
});


const showcase=document.querySelector("#text-showcase");
const input =document.querySelector("#user-input");
const timer=document.querySelector("#timer");
const button=document.querySelector("#start-btn");


button.addEventListener("click",main);


input.addEventListener("input", (e) => {
  const value = e.target.value;
  const lastChar = value.slice(-1);
  if (lastChar === " ") {
    updateIndex()
    input.value = "";  
  }
});


let words=[];
let currentIndex=0;
let correctWords=[]


async function main()
{
  await getWords();
  generateWord(0);
}


async function getWords(){
  const url="https://random-word-api.herokuapp.com/word?number=300&length=5";
  const data= await fetch(url);
  const result= await data.json();
  words=result;
}
function generateWord(startIndex){
  showcase.innerHTML="";
  for(let i=startIndex;i<startIndex+34;i++)
  {
    const spanElement =document.createElement("span");
    if(i=== startIndex)
    {
      spanElement.classList.add("bg-pink-500","rounded-lg")
    }
    spanElement.classList.add(`word-${i}`);
    spanElement.textContent=words[i]+" ";
    showcase.appendChild(spanElement);
  }
}
function updateIndex(){
  if(currentIndex>0 && currentIndex%33 === 0){
    currentIndex++
    generateWord(currentIndex)
    return
  }
  document.querySelector(`.word-${currentIndex}`).classList.remove("bg-pink-500","rounded-lg");
  currentIndex++;
  document.querySelector(`.word-${currentIndex}`).classList.add("bg-pink-500","rounded-lg");
}
