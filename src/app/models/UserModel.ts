export class User {
  loadprofile: any;
  getRawValue(): any {
    throw new Error('Method not implemented.');
  }

  UserName: String;
  LastName: string;
  FirstName: string;
  Email: string;
  password: any;
  password2: any;
   profilePicture: string;
   contact:number;
    CIN: String;
    ville:String;

  constructor(ville: String, UserName: string, FirstName: string,
              Email: string, profilepicture: string ,LastName: string, contact:number , CIN: String) {
   this.CIN=CIN,
   this.ville=ville,
    this.Email=Email,
    this.LastName=LastName,
    this.FirstName= FirstName,
    this.contact=contact,
    this.profilePicture=profilepicture,
    this.UserName=UserName



}

}
