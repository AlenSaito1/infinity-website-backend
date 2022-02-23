import { Controller, Get, Header, Param, Query, Response as Res } from '@nestjs/common'
import { AvatarService } from './avatar.service'
import { Response } from 'express'
@Controller('avatar')
export class AvatarController {
    constructor(private avatarService: AvatarService) {}

    @Get('/:seed')
    public generateAvatar(@Param('seed') seed: string): string {
        return this.avatarService.generateAvatar(seed)
    }

    @Get('/asImage/:seed')
    @Header('Content-Type', 'image/svg+xml')
    public async asImage(@Param('seed') seed: string, @Res() res: Response) {
        const img = await this.avatarService.asImage(seed)
        return res.send(img)
    }
}
