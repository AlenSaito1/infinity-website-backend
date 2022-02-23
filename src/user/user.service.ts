import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
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
}
