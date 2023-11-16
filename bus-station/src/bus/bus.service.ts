import { Injectable }         from '@nestjs/common';
import {HttpService}          from "@nestjs/axios";


@Injectable()
export class BusService {
    constructor(private readonly httpService: HttpService) {}
    finAll(){

    }
}

