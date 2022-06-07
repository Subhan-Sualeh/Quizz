var quizQues =[
    {
        num : 1 ,
        question : "Javascript is an _______ language?" ,
        options :{
            a : "Object-Oriented" ,
            b : "Object-Based" ,
            c : "Procedual" ,
            d : "None of Them"
        } ,
        answer : "Object-Oriented"
    } ,
    {
        num : 2 ,
        question : "Which of the following keywords is used to define a variable in Javascript?" ,
        options :{
            a : "let" ,
            b : "var" ,
            c : "for" ,
            d : "None of Them"
        }
        ,
        answer : "var"
    } ,
    {
        num : 3 ,
        question : "Which element is used to connect JavaScript to Html" ,
        options :{
            a : "script" ,
            b : "link" ,
            c : "Both A & B" ,
            d : "None of Them"
        },
        answer : "script"
    } ,
    {
        num : 4 ,
        question : "What is ++ called in JavaScript" ,
        options :{
            a : "Decrement" ,
            b : "Increment" ,
            c : "Addition" ,
            d : "None of Them"
        },
        answer : "Increment"
    } ,
    {
        num : 5 ,
        question : "How do we Comment in JavaScript" ,
        options :{
            a : "/* */" ,
            b : "###" ,
            c : "//" ,
            d : "<-- -->"     
        },
        answer : "//"
    }
    
]
var htmlQues = document.getElementById("question")

var optList = document.getElementsByClassName("qList")

var hider = document.getElementsByClassName("nxtQ")

hider = hider[0].getElementsByTagName("button")

var quizTEST = document.getElementById("quizTeSt")

var result = document.getElementById("result")

var resultShow = document.getElementById("resultHere")

var countDis = document.getElementsByClassName("bottomQ")[0].getElementsByTagName("h3")[0]



result.style.display = "none"

var count = 0

var counter = 1

var corAns = 0

    htmlQues.innerHTML = quizQues[count].question 
    optList[0].innerHTML = quizQues[count].options.a
    optList[1].innerHTML = quizQues[count].options.b
    optList[2].innerHTML = quizQues[count].options.c
    optList[3].innerHTML = quizQues[count].options.d


function nxtQuest(){
    
    if(count < quizQues.length){
        count++
        ++counter
    htmlQues.innerHTML = quizQues[count].question 
    optList[0].innerHTML = quizQues[count].options.a
    optList[1].innerHTML = quizQues[count].options.b
    optList[2].innerHTML = quizQues[count].options.c
    optList[3].innerHTML = quizQues[count].options.d

    hider[0].classList.replace("show" , "hide")

    countDis.innerHTML = counter +" / 5"
    
    for(var i = 0 ; i < optList.length ; i++){
        optList[i].classList.remove("disable")
        optList[i].style.backgroundColor = "white"
    }
    }
    else{
        quizTEST.style.display = "none"
        result.style.display = "block"
        resultShow.innerHTML = corAns +" out of 5"

    }

}
function ansCheck(e){
    if(e.innerHTML == quizQues[count].answer){
        corAns++
        e.style.backgroundColor = "green"

        
    hider[0].classList.replace("hide" , "show")

    }
    else{
        e.style.backgroundColor = "red"
        for (var i = 0; i < optList.length; i++) {
            if (optList[i].innerHTML == quizQues[count].answer) {
              optList[i].style.backgroundColor = "green";
            }
    hider[0].classList.replace("hide" , "show")
    
    }
    }
    for(var i = 0 ; i < optList.length ; i++){
        optList[i].className += " disable"
    }
}
if(counter == 5){
    hider[0].innerHTML = "Finish"
}
else{
    hider[0].innerHTML ="Next Question"
}








// var hider = document.getElementsByClassName("nxtQ")

// hider = hider[0].getElementsByTagName("button")

// console.log(hider[0])

// htmlQues.innerHTML = quizQues[count].question

// var optionNum = 0 
// optList[optionNum].innerHTML = quizQues[count].options.a
// optList[++optionNum].innerHTML = quizQues[count].options.b
// optList[++optionNum].innerHTML = quizQues[count].options.c
// optList[++optionNum].innerHTML = quizQues[count].options.d

// function nxtQuest(){
//     ++count

//     if(count == 5){

//     hider[0].innerHTML = "Finish"
//     hider[0].setAttribute("onclick" , "finish()")
//     }
//     else{
             
//     htmlQues.innerHTML = quizQues[count].question
//     var optionNum = 0 
//     optList[optionNum].innerHTML = quizQues[count].options.a
//     optList[++optionNum].innerHTML = quizQues[count].options.b
//     optList[++optionNum].innerHTML = quizQues[count].options.c
//     optList[++optionNum].innerHTML = quizQues[count].options.d

//     }
// }



