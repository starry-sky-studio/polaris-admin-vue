export interface LoginModel {
  username: string
  password: string
}

export interface signupModel extends LoginModel {
  confirmPassword: string
}
