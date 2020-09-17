import { Injectable } from '@nestjs/common';
import {UsersService} from "../users/users.service";

/**
 * Authentication service
 */
@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    /**
     * User password validation
     * @param username
     * @param pass
     */
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);

        // TODO: Remove clear text password with encrypted password from DB
        if (user && user.password === pass) {
            const { ...result } = user;
            // Removing password from returned user data
            delete result.password
            return result;
        }
        return null;
    }
}
