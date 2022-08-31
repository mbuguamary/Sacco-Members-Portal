
url="http://localhost:3000"

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
    const loan={
      idnumber:document.getElementById("idno").value,
      amount:document.getElementById("txt1").value,
      totalloan:document.getElementById("txt1").value,
      monthlyded:document.getElementById("txt1").value,
      duration:document.getElementById("txt1").value
    }
    fetch(`${url}/suggestions`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
         Accept: "application/json",
      },
      body:JSON.stringify(loan)
  }).then(response=>response.json);
  }
  document.addEventListener("DOMContentLoaded",()=>{
    const addSuggestions=document.getElementById("querries");
    addSuggestions.addEventListener("submit", postSuggestions);

  })