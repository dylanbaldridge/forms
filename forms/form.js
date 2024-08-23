const reviewButton = document.getElementById("memberBtn");
const newMemberBtn = document.getElementById("newMemberBtn");


reviewButton.onclick=function memberLogin() {
    document.getElementById('reviewDiv').style.visibility = "visible";
    document.getElementById('newMemberDiv').style.visibility="hidden";
    document.getElementById('memberBtn').style.visibility="hidden";
    document.getElementById('newMemberBtn').style.visibility="visible";

 }


 newMemberBtn.onclick=function newMmemberLogin() {
    document.getElementById('reviewDiv').style.visibility = "hidden";
    document.getElementById('newMemberDiv').style.visibility="visible";
    document.getElementById('memberBtn').style.visibility="visible";
    document.getElementById('newMemberBtn').style.visibility="hidden";

 }