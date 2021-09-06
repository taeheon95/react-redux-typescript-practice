export interface Contact {
  [key: string]: number | string;
  id: number;
  name: string;
  age: number;
  description: string;
  phoneNumber: string;
  email: string;
}

export interface AddContact {
  name: string;
  age: number;
  description: string;
  phoneNumber: string;
  email: string;
}
