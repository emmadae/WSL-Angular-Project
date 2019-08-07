import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeContentService {
    constructor(private http: HttpClient) { }

    // Congif URL to Get JSON Data Report 04-10-2018
    configUrlData = '../../../assets/data/data-home.json';

    getConfigData() {
        return this.http.get(this.configUrlData + '?' + new Date(), {responseType: 'json'});
    }
}
