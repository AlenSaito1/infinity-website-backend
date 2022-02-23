import { HttpModule, HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AvatarService {
    constructor(private readonly httpService: HttpService) {}

    public generateAvatar = (seed: string = '0'): string => {
        return `https://avatars.dicebear.com/api/bottts/${seed}.svg`
    }

    public asImage(seed: string): Promise<Buffer> {
        return new Promise((resolve) => {
            const observable = this.httpService.get(this.generateAvatar(seed), { responseType: 'arraybuffer' })
            observable.subscribe((response) => {
                resolve(Buffer.from(response.data))
            })
        })
    }
}
