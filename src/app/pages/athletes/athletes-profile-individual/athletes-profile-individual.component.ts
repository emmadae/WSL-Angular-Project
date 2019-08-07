import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-athletes-profile-individual',
    templateUrl: './athletes-profile-individual.component.html',
    styleUrls: ['./athletes-profile-individual.component.scss']
})
export class AthletesProfileIndividualComponent implements OnInit {
    // Variables
    public data = undefined;
    public readingText = 'Continue Reading';
    public expand = false;

    constructor(@Inject(MAT_DIALOG_DATA) public dataImport: any,
                private mdDialogRef: MatDialogRef<any>) { }

    ngOnInit() {
        this.data = [];
        this.data = this.dataImport.data;
    }

    expandText() {
        this.expand = !this.expand;
        if (this.expand === true) {
            this.readingText = 'Read Less';
        } else {
            this.readingText = 'Continue Reading';
        }
    }
}
