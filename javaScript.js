function validateFirstName(fname) {
    if(!fname.match(/^[a-zA-Z]+/)) return false;
    return true;
}
function validateLastName(lname) {
    if(!lname.match(/^[a-zA-Z]+/)) return false;
    return true;
}
function validateSubject(subject) {
    if(subject.length===0) return false;
    return true;
}
function validateEmail (email) {
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) return false;
    return true;
}
function validateMessage(message) {
    if (message.length === 0) return false;
    return true;
}
function validateForm() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if(!validateFirstName(fname)) alert('Please enter a valid first name');
    else if(!validateLastName(lname)) alert('Please enter a valid last name');
    else if(!validateSubject(subject)) alert('Please enter a subject');
    else if(!validateEmail(email)) alert('Please enter a valid Email');
    else if(!validateMessage(message)) alert('Please enter a message');
    else window.open("mailto:ron.levy01@post.idc.ac.il?subject="+subject+"&body="+message);
}

