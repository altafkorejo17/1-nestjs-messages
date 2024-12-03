import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {}

    @Post()
    createMessage(@Body() body: any) {
        console.log("Body : ", body);
    }

    @Get(":id")
    getMessage(@Param("id") id: string) {
        console.log("id: ", id);
    }
}
