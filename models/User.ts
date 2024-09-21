export class Users {
  private _usr_id!: number;

  // Getter and Setter for sss_no
  get usr_id(): number {
    return this._usr_id;
  }

  set usr_id(value: number) {
    this._usr_id = value;
  }
}

export const UserService = new Users();