import { Injectable } from "@angular/core";
import { ConfigService, RestEnds } from "./config.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiManagerService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  prepareUrl(restEnd) {
    return this.configService.getApiBaseUrl() + restEnd;
  }

  getRequest(restEnd) {
    const restUrl = this.prepareUrl(restEnd);
    return this.http.get(restUrl);
  }

  postRequest(restEnd,bodyParam) {
    const restUrl = this.prepareUrl(restEnd);
    return this.http.post(restUrl,bodyParam);
  }

  putRequest(restEnd,bodyParam) {
    const restUrl = this.prepareUrl(restEnd);
    return this.http.put(restUrl,bodyParam);
  }

  deleteRequest(restEnd) {
    const restUrl = this.prepareUrl(restEnd);
    return this.http.delete(restUrl);
  }
}
