import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { filterDto, paginate, PaginationDto, projectionDto } from 'nestjs-keyset-paginator/dist'
import { UserDocument } from './user.schema'
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) {}

    public findUser = async (jid: string): Promise<UserDocument | {}> => {
        const user = await this.userModel
            .findOne({
                jid: { $exists: true, $eq: jid }
            })
            .lean()
        return user ?? {}
    }

    public findAll = async (from = 0, to = 10) => {
        const users = await this.userModel.find().skip(from).limit(to).lean()
        return users
    }

    public findAllPaginated = async (
        skip = 0,
        limit = 10,
        start_key?,
        sort_field?: string,
        sort_order?: number,
        filter?: filterDto[],
        projection?: projectionDto[]
    ) => {
        return paginate(this.userModel, skip, limit, start_key, sort_field, sort_order, filter, projection)
    }
}
