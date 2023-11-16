import { Module } from '@nestjs/common';
import { BusService } from './bus.service';
import { BusController } from './bus.controller';
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  providers: [BusService],
  controllers: [BusController]
})
export class BusModule {}
