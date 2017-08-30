export class User {
  email: string;
  password: string;
  loginState: boolean;

  constructor()
  {
    this.email = '';
    this.password = '';
    this.loginState = true;
  }

}
