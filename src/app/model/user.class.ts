export class User {
  id: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  reviewer: boolean;
  admin: boolean;

  constructor(id: number = 0,uName: string = '',pwd: string = '', fName: string = '', lName: string = '', ph: string = '', email: string = "",rev: boolean = false,
    admin: boolean = false) {
    this.id = id;
    this.userName = uName;
    this.password = pwd;
    this.firstName = fName;
    this.lastName = lName;
    this.phone = ph;
    this.email = email;
    this.reviewer = rev;
    this.admin = admin;
  }
}