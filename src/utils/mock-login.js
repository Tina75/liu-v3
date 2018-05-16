import Mock from 'mockjs'

Mock.mock('/login', (request, response) => {
  // console.log(request)
  let req = request.body
  if (req.userName && req.password) {
    return {
      data: {
        resultCode: 0,
        data: {
          userId: '1',
          name: 'Tina',
          role: '1',
          password: '123456'
        },
        message: '登录成功！'
      }
    }
  } else {
    return {
      data: {
        resultCode: 1,
        data: {},
        message: '登录失败'
      }
    }
  }
})
