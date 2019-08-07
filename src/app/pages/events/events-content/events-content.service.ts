import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventsContentService {
    constructor(private http: HttpClient) { }

    // Congif URL to Get JSON Data Report
    configUrlData = '../../../assets/data/data-events.json';

    getConfigData() {
        return this.http.get(this.configUrlData + '?' + new Date(), {responseType: 'json'});
    }
}
