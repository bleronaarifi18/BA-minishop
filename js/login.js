let getLoginForm = document.getElementById('signinForm');

getLoginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let getEmail = document.getElementById('signinEmail').value;
    let passCode = document.getElementById('signInPass').value;

    const storedUsers = localStorage.getItem('allUsers');
    if(!storedUsers) {
        alert("kjo llogari nuk egziston");
        return;
    }

    const users = JSON.parse(storedUsers);

    let userFound = null;
    let isLogedIn = false;

    for(let i = 0; i < users.length; i++) {
        const user = users[i];

        if(user.email === getEmail && user.password === passCode) {
            userFound = user;
            break;
        }
    }

    if(getEmail === '' || passCode === '') {
        alert('Mbushni formen');
        return;
    }

    if(passCode.length !== 6) {
        alert('passwordi duhet tjet me 6 karaktere');
        return;
    }


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

function closeForm() {
    let getLogedInfo = localStorage.getItem('isLogedIn');
    let parseLogedIn = JSON.parse(getLogedInfo);

    if(parseLogedIn === true) {
        console.log('punoi')
    }
    return;
}
closeForm();