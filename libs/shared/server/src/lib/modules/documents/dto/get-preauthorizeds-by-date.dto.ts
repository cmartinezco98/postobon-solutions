import { IsDateString, IsOptional, IsString } from 'class-validator';
import { GetPreAuthorizedsByDate} from '@postobon-solutions/models';

export class GetPreAuthorizedsByDateDto implements GetPreAuthorizedsByDate{
  @IsDateString()
  start_date!: string;

  @IsDateString()
  end_date!: string;

  @IsOptional()
  @IsString()
  route?: string;
}