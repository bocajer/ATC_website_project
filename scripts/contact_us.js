function formSubmit() {
    let outPut = "";
    outPut += "Thank you ";
    outPut += document.getElementById('fname').value;
    outPut += ".\n\nWe will be in touch with you soon through the following phone number: ";
    outPut += document.getElementById('phone').value;
    outPut += "\n\nMessage: \n";
    outPut += document.getElementById('inquiry').value;
    alert(outPut);
}