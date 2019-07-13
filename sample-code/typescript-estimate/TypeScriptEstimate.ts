class User2 {
    name = 'aaa'
    age = 30
    address = {
        country: 'japan',
        prefecture: 'Tokyo'
    }
}

// 引数の後ろに「: 型」の形で型を宣言することができる。この型宣言は省略することもできる。
// その場合はjavascriptと同様にany型として扱われる
function setCountry(user: User2, country: string) {
    user.address.country = country
}