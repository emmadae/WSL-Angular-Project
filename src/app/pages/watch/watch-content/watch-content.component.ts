import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WatchContentService } from './watch-content.service';

@Component({
    selector: 'app-watch-content',
    templateUrl: './watch-content.component.html',
    styleUrls: ['./watch-content.component.scss']
})
export class WatchContentComponent implements OnInit {
    // variables
    @ViewChild('slides', { read: ElementRef }) public slides: ElementRef<any>;
    public data = undefined;
    public currentVideo = undefined;

    constructor(private watchContentService: WatchContentService) { }

    ngOnInit() {
        this.watchContentService.getConfigData().subscribe(dataReturn => {
            if (dataReturn !== undefined) {
                this.data = dataReturn;
                console.log(this.data);
                this.currentVideo = this.data[0];
                console.log(this.currentVideo);
            }
        });
    }

    scrollRight(): void {
        this.slides.nativeElement.scrollTo({ left: (this.slides.nativeElement.scrollLeft + 400), behavior: 'smooth' });
    }

    scrollLeft(): void {
        this.slides.nativeElement.scrollTo({ left: (this.slides.nativeElement.scrollLeft - 400), behavior: 'smooth' });
    }
}
