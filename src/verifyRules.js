export default {
  phone: {
    test: /^1[3|4|5|6|7|8|9][0-9]{9}$/,
    message: '手机号格式不正确'
  },
  phoneCode: {
    test: /^[0-9]*$/,
    message: '验证码格式不正确'
  },
  realName: {
    test: /^[\u4E00-\u9FA5]{1,5}$/,
    message: '姓名格式不正确'
  },
  idCard: {
    test: /(^\d{15}$)|(^\d{17}(\d|X)$)/,
    message: '身份证格式不正确'
  },
  bankCard: {
    test: /^[0-9]*$/,
    message: '银行卡格式不正确'
  }
}
