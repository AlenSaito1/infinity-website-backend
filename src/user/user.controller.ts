import { Controller, Get, Param, Query } from '@nestjs/common'
import { UserService } from './user.service'

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/user/:jid')
    async findUser(@Param('jid') jid: string) {
        return await this.userService.findUser(jid)
    }

    @Get('/users')
    async findAll(@Query('from') from = 0, @Query('to') to = 10) {
        return await this.userService.findAll(from, to)
    }
}
