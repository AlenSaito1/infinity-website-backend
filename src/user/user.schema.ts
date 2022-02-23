import { Prop, Schema as SchemaClass, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema } from 'mongoose'
import { ICard } from './interfaces/icard.interface'
import { IItem } from './interfaces/item.interface'
import { IPokemon } from './interfaces/pokemon.interface'

@SchemaClass()
export class User {
    @Prop({ type: String, unique: true })
    jid?: string

    @Prop({ type: String })
    name?: string

    @Prop({ type: Number, default: 0 })
    exp?: number

    @Prop({ type: Schema.Types.Mixed })
    banReason?: string

    @Prop({ type: Schema.Types.Mixed })
    haigusha?: unknown

    @Prop({ type: Array })
    dex?: string[]

    @Prop({ type: Array, default: [] })
    party?: IPokemon[]

    @Prop({ type: Array, default: [] })
    pc?: IPokemon[]

    @Prop({ type: Schema.Types.Mixed })
    gold?: number

    @Prop({ type: Schema.Types.Mixed, default: [] })
    items?: string[]

    @Prop({ type: Boolean, default: false })
    idle?: boolean

    @Prop({ type: Number, default: 0 })
    bank?: number

    @Prop({ type: Schema.Types.Mixed })
    bio?: string

    @Prop({ type: Number, default: 0 })
    quizwins?: number

    @Prop({ type: Schema.Types.Mixed })
    res?: {
        res: string
        resp: string
    }

    @Prop({ type: Boolean, default: false })
    ban?: boolean

    @Prop({ type: Date })
    daily?: Date

    @Prop({ type: Number })
    hid?: number

    @Prop({ type: String, default: '' })
    icon?: string

    @Prop({ type: Array, default: [] })
    inventory?: IItem[]

    @Prop({ type: Array, default: [] })
    cards?: ICard[]

    @Prop({ type: Array, default: [] })
    deck?: ICard[]

    @Prop({ type: Array, default: [] })
    claimed?: string[]

    @Prop({ type: Number, default: 0 })
    claimedToday?: number
}

export type UserDocument = User & Document

export const UserModel = SchemaFactory.createForClass(User)
