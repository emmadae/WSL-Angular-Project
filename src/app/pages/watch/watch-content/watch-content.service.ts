import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WatchContentService {
    constructor(private http: HttpClient) { }

    // Congif URL to Get JSON Data Report
    configUrlData = '../../../assets/data/data-watch.json';

    getConfigData() {
        return this.http.get(this.configUrlData + '?' + new Date(), {responseType: 'json'});
    }
}
