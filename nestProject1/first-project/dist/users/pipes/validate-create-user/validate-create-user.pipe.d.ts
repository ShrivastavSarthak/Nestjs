import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dtos';
export declare class ValidateCreateUserPipe implements PipeTransform {
    transform(value: CreateUserDto, metadata: ArgumentMetadata): CreateUserDto;
}
