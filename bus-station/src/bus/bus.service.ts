import {Injectable}  from "@nestjs/common";
import {HttpService} from "@nestjs/axios";
import {parseString} from "xml2js";


@Injectable()
export class BusService {
    constructor(private readonly httpService: HttpService) {
    }

    async getAllBusInfo(): Promise<any> {
        try {
            console.log("현재 버스 정보를 가져오는 요청을 합니다.");
            const result = await this.httpService
                .get(`http://openapitraffic.daejeon.go.kr/api/rest/busRouteInfo/getStaionByRouteAll?serviceKey=${process.env.KEY}&reqPage=4`)
                .toPromise();
            const xmlData = result.data;
            const jsonData = await this.convertXmlToJson(xmlData);
            console.log("현재 버스 정보 가져오기 완료");
            return jsonData;
        } catch (error) {
            console.error("Error", error.message);
        }
    }

    async getArriveInfo() {
        try {
            console.log("현재 '한국전력공사 정류장' 버스 도착 정보를 가져오는 요청을 합니다.");
            const result = await this.httpService
                .get(`http://openapitraffic.daejeon.go.kr/api/rest/arrive/getArrInfoByStopID?serviceKey=${process.env.KEY}&BusStopID=8002881`)
                .toPromise();
            const xmlData = result.data;
            const jsonData = await this.convertXmlToJson(xmlData);
            console.log("현재 '한국전력공사 정류장' 버스 정보 가져오기 완료");
            return this.extractRouteCodes(jsonData);
        } catch (error) {
            console.error("Error", error.message);
        }
    }

    private convertXmlToJson(xmlData: string): Promise<any> {
        return new Promise((resolve, reject) => {
            parseString(xmlData, {explicitArray: false}, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    private extractRouteCodes(jsonData: any): string[] {
        const itemList = jsonData?.ServiceResult?.msgBody?.itemList;
        if (itemList && Array.isArray(itemList) && itemList.length > 0) {
            return itemList.map(item => `버스 번호: ${item.CAR_REG_NO}/ 남은 시간: ${item.EXTIME_MIN}분-${item.EXTIME_SEC}초/ 잔여정류 수:${item.STATUS_POS}`)
                .filter(routeCode => !!routeCode);
        }
        return [];
    }


}

