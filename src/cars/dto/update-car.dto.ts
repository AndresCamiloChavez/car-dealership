import { IsString, IsOptional, IsUUID } from "class-validator";

export class UpdateCarDto{

    @IsOptional()
    @IsUUID()
    readonly id?: string;

    @IsOptional()
    @IsString()
    readonly brand?: string;

    @IsOptional()
    @IsString()
    readonly model?: string

}