interface AtavarObject {
  avatar: string;
  classe: string;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  avatares: Array<string | AtavarObject>
}

export default function createUser({ name = '', email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }
  return user;
}

