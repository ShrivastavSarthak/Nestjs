import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dtos';
import { parseArgs } from 'util';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Insight ValidateCreatePipes!');
    console.log(value);
    console.log(metadata);

    const pareseAge = parseInt(value.age.toString());

    if (isNaN(pareseAge)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException('Invalid data type', HttpStatus.BAD_REQUEST);
    }
    console.log(`${pareseAge} is returning a number...`);

    return { ...value, age: pareseAge };

    return value;
  }
}
