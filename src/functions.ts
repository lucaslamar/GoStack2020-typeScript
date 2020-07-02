import { Request, Response } from 'express';
import CreateUser from './services/CreateUser'

export function helloTypeScript(request: Request, response: Response) {
  const user = CreateUser({
    name: 'Ye Qui',
    email: 'yequi@email.com',
    password: '123456',
    avatares: [
      'Uma Folha de Outono',
      'Lord Grim',
      { avatar: 'Lord Grim', classe: 'Aventureiro' },
      { avatar: 'Uma Folha de Outono', classe: 'Mago de Batalha' }
    ],
  });

  return response.json({ message: 'Hello TypeScript!'});
}