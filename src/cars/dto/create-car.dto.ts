import { IsString, MinLength } from "class-validator";

export class CreateCarDto{


    @IsString({message: 'Es obligatoria la marca'})
    @MinLength(5)
    readonly brand: string;


    @IsString()
    readonly model: string;
}