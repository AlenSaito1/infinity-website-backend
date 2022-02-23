import { HttpModule, HttpService } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { AvatarService } from './avatar.service'
import { AvatarController } from './avatar.controller'
@Module({
    imports: [HttpModule],
    controllers: [AvatarController],
    providers: [AvatarService],
    exports: [AvatarService]
})
export class AvatarModule {}
