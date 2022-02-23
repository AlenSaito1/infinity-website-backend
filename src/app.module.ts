import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './user/user.module'
import { AvatarModule } from './avatar/avatar.module'
@Module({
    imports: [
        AvatarModule,
        UserModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGO_URI as string)
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
