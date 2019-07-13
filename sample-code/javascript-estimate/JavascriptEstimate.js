class User{
    name = 'aaa'
    age = 0
}

// このuserはUserクラスのオブジェクトであると認識して、この文脈内であればコード補完してくれる
const user = new User()

function createUser(){
    return new User()
}

// 関数の返り値の型が自明な場合は、コード補完してくれる
const user2 = createUser()