import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return "items";
    }


    @Get(':id')
    findOne(@Param('id') id) {
        return `item ${id.id};`
    }


    @Post()
    create(@Body() createItemDto: CreateItemDto) {
        return `Name:${createItemDto.name} Desc:${createItemDto.description}`;
    }

    @Delete(':id')
    delete(@Param('id') id):string {
        return `Delete ${id}`;
    }
}
