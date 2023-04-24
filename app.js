// Initialize Firebase

const firebaseConfig = {
    
    apiKey: "AIzaSyChomkFipQOFGb7oSlQcP6hTzDtIvyx-6Y",
    authDomain: "web-app-99b47.firebaseapp.com",
    databaseURL: "https://web-app-99b47-default-rtdb.firebaseio.com",
    projectId: "web-app-99b47",
    storageBucket: "web-app-99b47.appspot.com",
    messagingSenderId: "371217837115",
    appId: "1:371217837115:web:b56954a5cad6ea997e001e"
};
firebase.initializeApp(firebaseConfig);

const reminderAppDB=firebase.database().ref("reminderApp");
document.getElementById("reminderApp").addEventListener("submit",submitForm)

function submitForm(e){
    e.preventDefault();

    var title=getElementVal('title');
    var date=getElementVal('date');

    // console.log(title,date);

    saveMessages(title,date);

    document.querySelector(".alert").style.display="block";

    setTimeout(() => {
        document.querySelector(".alert").style.display="none";
    },3000);

    document.getElementById("reminderApp").reset();
}

const saveMessages=(title,date)=>{
    var newreminderApp=reminderAppDB.push();

    newreminderApp.set({
        title : title,
        date : date,
    });
}

const getElementVal=(id)=>{
    return  document.getElementById(id).value;
};





