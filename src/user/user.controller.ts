import { Body, Controller, Get, Param, Query } from '@nestjs/common'
import { PaginationDto } from 'nestjs-keyset-paginator/dist'
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

    @Get('/users/paginate')
    findAllPaginated(@Body() params: PaginationDto) {
        return this.userService.findAllPaginated(
            params.skip,
            params.limit,
            params?.start_key,
            params?.sort?.field,
            params?.sort?.order,
            params?.filter,
            params?.projection
        )
    }
}
