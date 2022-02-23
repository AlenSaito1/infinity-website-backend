import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserController } from './user.controller'
import { UserModel } from './user.schema'
import { UserService } from './user.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserModel }])],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
