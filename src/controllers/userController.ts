import { Request, Response, NextFunction } from 'express';
import  UserRepository  from '../repositories/userRepository';
import { User, UpdateUser } from '../DTOs/User';

class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = User.parse(req.body);

      const existsUserWithEmail = await UserRepository.findByEmail(userData.email);

      if (existsUserWithEmail) {
        res.status(400).json({ message: 'This email is already registered' });
      }

      const existsUserWithCpf = await UserRepository.findByCpf(userData.cpf);

      if (existsUserWithCpf) {
        res.status(400).json({ message: 'This CPF is already registered' });
      }

      const user = await UserRepository.create(userData);

      res.status(201).json({ message: 'User created', data: user });
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const user = await UserRepository.findById(userId);

      if (!user) {
        res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ data: user });
    } catch (error) {
      return next(error);
    }
  }

  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserRepository.findAll();

      res.status(200).json({ data: users });
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const userData = UpdateUser.parse(req.body);

      const user = await UserRepository.update(userId, userData);

      res.status(200).json({ message: 'User updated', data: user });
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      await UserRepository.delete(userId);

      res.status(200).json({ message: 'User deleted' });
    } catch (error) {
      return next(error);
    }
  }
}

export default new UserController();
