class User3 {
    name = 'aaa'
    age = 30
    address = {
        country: 'japan',
        prefecture: 'Tokyo'
    }
}

const user = new User3()

console.log(user.weight)    // Type Error weightはuserに存在しない
user.weight = 60    // Type Error weightはuserに存在しない

const newUser = {
    ...user,
    weight:60
}

newUser.weight = 65  // Errorにならない