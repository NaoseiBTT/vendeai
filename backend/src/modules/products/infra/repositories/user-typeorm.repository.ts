import { Repository } from "typeorm";
import { UserRepository } from "../../application/repositories/user.repository.js";
import { User } from "../../domain/entities/user.entity.js";
import { UserSchema } from "../database/typeorm/entities/user-schema.js";

import { InjectRepository } from "@nestjs/typeorm";

export class UserTypeOrmRepository implements UserRepository{

    constructor(
        @InjectRepository(UserSchema)
        private readonly repository: Repository<UserSchema>
    ){}

    async create(user: User): Promise<void> {
        const userData = this.repository.create({
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone
        })

        await this.repository.save(userData)
    }
}