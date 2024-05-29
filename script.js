const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index=0;
let correct=0,incorrect=0,total=quizData.length;
let ques=document.getElementById("ques");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadquestions=()=>{
    if (total === index) {
        return quizEnd()
    }
    reset();
    const data=quizData[index];
    ques.innerHTML=`${index+1}) ${data.question}`;
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d

}
const submitquiz=()=>{
    const data=quizData[index];
    const ans=getanswer();
    if(ans===data.correct)correct++;
    else incorrect++;
    index++;
    loadquestions();
    return;

}
const getanswer=()=>{
    allInputs.forEach(
        (input)=>{
            if(input.checked){
                return input.value;
            }
        }
    )
}
const reset = () => {
    allInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadquestions(index);