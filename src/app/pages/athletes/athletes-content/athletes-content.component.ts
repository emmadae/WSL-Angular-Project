import { Component, OnInit } from '@angular/core';
import { AthletesContentService } from './athletes-content.service';
import { AthletesProfileIndividualComponent } from '../athletes-profile-individual/athletes-profile-individual.component';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-athletes-content',
    templateUrl: './athletes-content.component.html',
    styleUrls: ['./athletes-content.component.scss']
})
export class AthletesContentComponent implements OnInit {
    // Variables
    public dataMens = undefined;
    public dataWomens = undefined;

    constructor(private athletesContentService: AthletesContentService,
                private dialog: MatDialog) { }

    ngOnInit() {
        // get data
        this.athletesContentService.getConfigData().subscribe(dataReturn => {
            if (dataReturn !== undefined) {
                this.dataMens = [];
                this.dataWomens = [];

                this.dataMens = dataReturn[0].mens[0];
                this.dataWomens = dataReturn[1].womens[0];
            }
        });
    }

    onClickShowAthlete(data) {
        const ref = this.dialog.open(AthletesProfileIndividualComponent, {
            width: '80vw',
            height: '80vh',
            data: {
                data: data
            }
        });
    }
}
