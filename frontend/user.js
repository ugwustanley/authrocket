const Authrocket = require('./index')

const app = Authrocket.initializeApp({
    apiKey: 'Z8NCDZW-D0Y4SZ0-MC2KRWD-5V9P7TG',
    appName: "ugwustanley"
})

const user = app.createAccount("ugwustanley206@gmail.com", "123456")

// if(user){
//     console.log(user)
// }