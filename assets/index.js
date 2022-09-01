
url="http://localhost:3000"
const memberName=document.getElementById("member");
const memberNo=document.getElementById("memberNo");
const mobile=document.getElementById("mobile");
const idNo=document.getElementById("idno");


document.getElementById("showNotes").style.display="none";
function showNotes() {
  document.getElementById("showNotes").style.display="block";
  }
  document.getElementById("querries").style.display="none";
function showQuestions() {
  document.getElementById("querries").style.display="block";
  }
  function postSuggestions(evt){
    evt.preventDefault;
    const suggestion={
      suggestion:document.getElementById("txt1").value
    
    }
    fetch(`${url}/suggestions`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
         Accept: "application/json",
      },
      body:JSON.stringify(suggestion)
  }).then(response=>response.json);
  }
  function postLoan(evt){
    evt.preventDefault;
    const amount =parseInt(document.getElementById("amount").value);
    totalloan=amount*0.2;
    const loan={
      idnumber:document.getElementById("idno").value,
      amount:document.getElementById("amount").value,
      totalloan:totalloan,
      monthlydeduction:document.getElementById("monthlyded").value,
      duration:document.getElementById("duration").value
    }
    fetch(`${url}/loandetails`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
         Accept: "application/json",
      },
      body:JSON.stringify(loan)
  }).then(response=>response.json);
  }
  function searchMember(evt){
   evt.preventDefault;
   fetch(`${url}/members/1`)
   .then(response=>response.json)
   .then(data=>{

   })
}
  


  document.addEventListener("DOMContentLoaded",()=>{
    const addSuggestions=document.getElementById("querries");
    addSuggestions.addEventListener("submit", postSuggestions);
    const addLoanForm=document.getElementById("addloan");
    addLoanForm.addEventListener("submit", postLoan);
  })