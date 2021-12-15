import { getRepository } from 'typeorm';
import { User } from '../../entity/User';

import {UserSignIn} from './dtos/user.signin.dtos';
import {UserSignUp} from './dtos/user.signup.dtos';

export default class UserService {

  async signin(user: UserSignIn) {
    const userRepository = getRepository(User);

    const { email, password } = user;

    const existsUser = userRepository.findOne({ where: { email, password } });

    if (!existsUser) {
      return null;
    }
  }

  async signup(user: UserSignUp) {

  }
}