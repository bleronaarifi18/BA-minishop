let getForm = document.getElementById('signupForm');

getForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let getNameAndSurname = document.getElementById('nameAndSurname').value;
    let getBirthDate = document.getElementById('birthDate').value;
    let getPhoneNumber = document.getElementById('phoneNumber').value;
    let getEmail = document.getElementById('signupEmail').value;
    let getPassCode = document.getElementById('passCode').value;

    if(getNameAndSurname == '' || getBirthDate == '' || getPhoneNumber == '' || getEmail == '' || getPassCode == '') {
        alert('MBUSHNI FUSHAT');
        return;
    }

    if(!getEmail.endsWith("@gmail.com")) {
        alert('patjeter duhet te perdorni gmail');
        return;
    }

    if(getPassCode.length !== 6) {
        alert('password duhet te jet me 6 karaktere');
        console.log('password duhet te jet me 6 karaktere');
        return;
    }

    let person = {
        nameAndSurname: getNameAndSurname,
        birthDate: getBirthDate,
        phoneNumber: getPhoneNumber,
        email: getEmail,
        password: getPassCode
    };


    let allUsers = JSON.parse(localStorage.getItem('allUsers') || '[]');
    allUsers.push(person);
    localStorage.setItem('allUsers', JSON.stringify(allUsers));

    document.getElementById('nameAndSurname').value = "";
    document.getElementById('birthDate').value = "";
    document.getElementById('phoneNumber').value = "";
    document.getElementById('signupEmail').value = "";
    document.getElementById('passCode').value = "";

    
})