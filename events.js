// events in javascript

// events are the announcements done by browser.

//  adding event listener
// event_target.addEventListener("event",function)
// let fpara = document.querySelector("#c")
// function changeText(){
//     fpara.textContent="Love Babbar"
// }
// fpara.addEventListener("click",changeText)


// remove eventlistener
// fpara.removeEventListener("Click",changeText)


// phases of the event listener
// 1.




// 2.




//3.




// default  parameter
//  we all  know what is the default function of the anchor tag we cahnge the default function by using event.preventdefault()
// let annchorElement = document.querySelector("#fanchor");
// function changeDefault(){
//     event.preventDefault();
//     annchorElement.textContent="Facebook"
// }
// annchorElement.addEventListener("Click",changeDefault);


// avoiding too many event listeners to improve the performance of the code
// 1. method
// let paras = document.querySelectorAll("p");
// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener("click",function (){
//     alert("You have clicked on: "+event.target.textContent);
// });
// }
// 2. method
// let paras = document.querySelectorAll("p")
// function alertpara(event){
//     alert("You have clicked on: "+event.target.textContent);
// }
// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener("click",alertpara);
// }
// 3. method
// let mydiv = document.querySelector("div")
// function alertpara(event){
//     alert("You have clicked on: "+event.target.textContent);
// }
// mydiv.addEventListener("click",alertpara)
// method 3 is the more optimal method then other because only one time the event listener is added on the div and whole four paragraph is given the event listener. method 2 is in only one time the function is created and same is used foreach iteration where as in method 1 four different function object are created which lowers the performance of the code.
