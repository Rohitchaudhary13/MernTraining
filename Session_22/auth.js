const register = function(name){
    console.log(`User Name: ${name}`)
}

const login = function(name, pass){
    console.log(`User ${name} successfully logged in`)
}

module.exports = {
    register,
    login,
}