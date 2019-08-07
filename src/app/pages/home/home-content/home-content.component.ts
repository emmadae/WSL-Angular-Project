import { Component, OnInit } from '@angular/core';
import { HomeContentService } from './home-content.service';

@Component({
    selector: 'app-home-content',
    templateUrl: './home-content.component.html',
    styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

    // Variables
    public dataHeadline = undefined;
    public dataSpotlight = undefined;

    constructor(private homeContentService: HomeContentService) { }

    ngOnInit() {
        // const xmlhttp = new XMLHttpRequest();
        // xmlhttp.open('GET', 'http://www.worldsurfleague.com/', false);
        // xmlhttp.send();
        // const data = xmlhttp.responseText;  // JSON.parse(xmlhttp.responseText);
        // console.log(data);

        // get data
        this.homeContentService.getConfigData().subscribe(dataReturn => {
            if (dataReturn !== undefined) {
                this.dataHeadline = [];
                this.dataSpotlight = [];

                console.log('data', dataReturn);
                this.dataHeadline = dataReturn[0].headline;
                this.dataSpotlight = dataReturn[1].spotlight;
            }
        });
    }
}
