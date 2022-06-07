const fs = require('fs');


const isEmail = (email) => {
    //check if email is valid
    return (email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) ? true : false;

}

const append = (email) => {
    if(isEmail(email)){
        fs.appendFile("email.txt", "   " + email, { encoding: "latin1", mode: 0o666, flag: "a" }, (e) => {
            e ? console.log('Error') : console.log("Appended");
        });
    }else{
        console.log('Do Nothing');
    }
}

append("kamzen1994@gmail.com");