import {
    Controller,
    Get,
    Render,
    Res,
} from "@nestjs/common";
import {BusService} from "./bus.service";
import {ApiTags}    from "@nestjs/swagger";

@ApiTags("bust-info")
@Controller("bus")
export class BusController {
    constructor(private BusService: BusService) {
    }

    @Get("/info")
    async getAllBusInfo() {
        return await this.BusService.getAllBusInfo();
    }

    @Get("/arrivalInfo")
    async getArriveInfo() {
        return await this.BusService.getArriveInfo()
    }


}
