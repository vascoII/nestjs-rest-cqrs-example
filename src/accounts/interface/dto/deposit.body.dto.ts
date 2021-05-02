import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class DepositBodyDTO {
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly amount: number;
}
