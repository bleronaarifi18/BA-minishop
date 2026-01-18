let getLoginForm = document.getElementById('signinForm');//get lofin html form

getLoginForm.addEventListener('submit', function(e) {
    e.preventDefault();//stop form refreshing

    //get input values
    let getEmail = document.getElementById('signinEmail').value;
    let passCode = document.getElementById('signInPass').value;


    //get all users from local stroage
    const storedUsers = localStorage.getItem('allUsers');

    //se if this account exists
    if(!storedUsers) {
        alert("kjo llogari nuk egziston");
        return;
    }

    //json parse  return string  to array
    const users = JSON.parse(storedUsers);

    let userFound = null;
    let isLogedIn = false;

    //for loop user id
    for(let i = 0; i < users.length; i++) {
        const user = users[i];

        //see if user email & password match to login
        if(user.email === getEmail && user.password === passCode) {
            userFound = user;
            break;
        }
    }

    //validating email and passcode
    if(getEmail === '' || passCode === '') {
        alert('Mbushni formen');
        return;
    }

    //cheeks if it is not equal with 6
    if(passCode.length !== 6) {
        alert('passwordi duhet tjet me 6 karaktere');
        return;
    }

    //if found user in localstroage complete login
    if(userFound) {
        console.log('LOGIN SUCSESSFUL');
        localStorage.setItem("currentUser", JSON.stringify(userFound));
        isLogedIn = true;
        let storeLoginUser = localStorage.setItem('isLogedIn', JSON.stringify(isLogedIn));
        window.location.href = '../Pages/index.html';
    }else {
        alert('email ose password jan gabim')
    }

})
