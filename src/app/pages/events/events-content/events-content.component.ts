import { Component, OnInit } from '@angular/core';
import { EventsContentService } from './events-content.service';

@Component({
    selector: 'app-events-content',
    templateUrl: './events-content.component.html',
    styleUrls: ['./events-content.component.scss']
})
export class EventsContentComponent implements OnInit {
    // variables
    public data = undefined;

    constructor(private eventsContentService: EventsContentService) { }

    ngOnInit() {
        this.eventsContentService.getConfigData().subscribe(dataReturn => {
            if (dataReturn !== undefined) {
                this.data = dataReturn;
            }
        });
    }
}
