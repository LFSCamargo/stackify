export interface IUser {
  name: string;
  email: string;
  password: string;
  birthDate: string;
  picture?: string;
}

export interface LoginArgs {
  email: string;
  password: string;
}

export interface RegisterArgs {
  name: string;
  email: string;
  password: string;
  birthDate: string;
  picture?: string;
}