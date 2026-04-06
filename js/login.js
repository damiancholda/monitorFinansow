const USER_DB={
    "damian":{
        password: "Damian",
        name: "damian",
        groupId: null,
        color : "#22c55e"
    },
    "ola" :{
        password : "Aleksandra",
        name: "ola",
        groupId : null,
        color : "#69247c"
    },
    "klaudia" :{
        password: "Klaudia",
        name:"klaudia",
        groupId: "team_alfa",
        color: "#ff2b2b"
    },
    "piotrek": {
        password: "Piotrek123",
        name: "Piotr",
        groupId: "team_alfa",
        color: "#0187d4"
    }
};
let currentUser = null;
let currentMonth = new Date().toISOString().slice(0, 7);
let currentContext = 'private'; 

function handleLogin(){

    const loginInput = document.getElementById('login-username').value.toLowerCase().trim();
    const passwordInput = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');
    const rememberMe = document.getElementById('remember-me').checked;

    errorElement.innerText = "";

    const user = USER_DB[loginInput];

    if(user && user.password === passwordInput){
        current.user = { ...user, login:loginInput };
        if(rememberMe){
            localStorage.setItem("loggedUser", loginInput);
        }
        unlockApp();
    }else{
        errorElement.innerText = "Błędny login lub hasło"
    }
}

function initApp(){
    const savedUserLogin = localStorage.getItem('loggedUser');

    if(savedUserLogin && USER_DB[savedUserLogin]){
        currentUser = { ...USER_DB[savedUserLogin], login:savedUserLogin};
        setupUI();
    }else{
        switchView('login');
    }
}

