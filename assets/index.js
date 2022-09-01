
url="http://localhost:3000"
  memberName=document.getElementById("Member");
  memberNo=document.getElementById("memberNo");
  mobileNo=document.getElementById("mobile");
  idNo=document.getElementById("idno");


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
  function postMember(evt){
    evt.preventDefault;
    const member={
     membername:document.getElementById("Member").value,
      memberno:document.getElementById("memberNo").value,
      mobile:document.getElementById("mobile").value,
      idno:document.getElementById("idno").value
    }
    fetch(`${url}/memberdata`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
         Accept: "application/json",
      },
      body:JSON.stringify(member)
  }).then(response=>response.json);
  }
  function getMember(evt){
    evt.preventDefault;
   fetch(`${url}/memberdata/1`)
   .then(response=>response.json())
   console.log(response)
   .then(data=>{
    memberName=data.membername;
    memberNo=data.memberno;
    mobileNo=data.mobile;
    idNo=data.idno
   })
  
   .catch(error=>{
    console.log(error);
  })
}
  


  document.addEventListener("DOMContentLoaded",()=>{
    
    const searchMemberbtn=document.getElementById("searchMemberb");
   searchMemberbtn.addEventListener("onclick",getMember);
   const addMember=document.getElementById("sbtdata");
   addMember.addEventListener("submit",postMember);
    const addSuggestions=document.getElementById("querries");
    addSuggestions.addEventListener("submit", postSuggestions);
    const addLoanForm=document.getElementById("addloan");
    addLoanForm.addEventListener("submit", postLoan);
    //getMember();

  })