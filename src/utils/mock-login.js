import Mock from 'mockjs'

Mock.mock('/login', (request, response) => {
  let req = JSON.parse(request)
  if (req.userName === 'Tina' && req.password === '123456') {
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
