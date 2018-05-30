const user = {
  userId: '1',
  name: 'Tina',
  role: '1',
  password: '123456'
}

export default {
  login: config => {
    let uname = JSON.parse(config.body).uname.userName
    user.name = uname
    console.log(user)
    return user
  }
}
