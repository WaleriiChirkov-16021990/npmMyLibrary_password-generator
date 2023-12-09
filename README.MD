# Description
### script : npm run default  
    this script generates the password uppercase + lowercase + numbers + symbols and 14 characters length
this: "node main.js length=14 lowercase=true uppercase=true numbers=true symbols=true",
### script : npm run default-not-number
    this script generates the password uppercase + lowercase - numbers + symbols and 14 characters length
this: "node main.js length=14 lowercase=true uppercase=true numbers=false symbols=true",
### script :npm run default-no-symbols 
    this script generates the password uppercase + lowercase + numbers - symbols and 14 characters length
this : "node main.js length=14 lowercase=true uppercase=true numbers=true symbols=false",
### script :default-no-uppercase 
    this script generates the password -uppercase + lowercase + numbers + symbols and 14 characters length
this : "node main.js length=14 lowercase=true uppercase=false numbers=true symbols=true",
### script:default-only-number 
    this script generates the password -uppercase - lowercase + numbers - symbols and 16 characters length
this : "node main.js length=16 lowercase=false uppercase=false numbers=true symbols=false",
### script:default-only-letters 
    this script generates the password uppercase + lowercase - numbers - symbols and 16 characters length
this : "node main.js length=16 lowercase=true uppercase=true numbers=false symbols=false"