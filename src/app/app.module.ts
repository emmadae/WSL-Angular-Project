import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    { path: '',                     component: HomeComponent },
    { path: 'events',               component: EventsComponent },
    { path: 'athletes',             component: AthletesComponent },
    { path: 'statistics',           component: StatisticsComponent },
    { path: 'watch',                component: WatchComponent },
    { path: 'store',                component: StoreComponent },
    { path: 'terms-and-policies',   component: TermsPoliciesComponent },
    { path: 'about',                component: AboutComponent }
];

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { EventsComponent } from './pages/events/events.component';
import { AthletesComponent } from './pages/athletes/athletes.component';
import { WatchComponent } from './pages/watch/watch.component';
import { StoreComponent } from './pages/store/store.component';
import { HomeContentComponent } from './pages/home/home-content/home-content.component';
import { TermsPoliciesComponent } from './pages/terms-policies/terms-policies.component';
import { AboutComponent } from './pages/about/about.component';
import { AthletesContentComponent } from './pages/athletes/athletes-content/athletes-content.component';
import { AthletesProfileIndividualComponent } from './pages/athletes/athletes-profile-individual/athletes-profile-individual.component';
import { WatchContentComponent } from './pages/watch/watch-content/watch-content.component';
import { AboutContentComponent } from './pages/about/about-content/about-content.component';

/* Service */
import { HomeContentService } from './pages/home/home-content/home-content.service';
import { AthletesContentService } from './pages/athletes/athletes-content/athletes-content.service';
import { EventsContentService } from './pages/events/events-content/events-content.service';
import { WatchContentService } from './pages/watch/watch-content/watch-content.service';

/* Modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule,
    MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule,
    MatListModule, MatProgressBarModule, MatProgressSpinnerModule, MatToolbarModule,
    MatTooltipModule, MatTabsModule, MatSelectModule, MatSidenavModule,
    MatSliderModule, MatSnackBarModule, MatMenuModule, MatDatepickerModule,
    MatNativeDateModule, MatGridListModule, MatTableModule, MatButtonToggleModule,
    MatChipsModule, MatStepperModule } from '@angular/material';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import 'hammerjs';
import { StoreContentComponent } from './pages/store/store-content/store-content.component';
import { StatisticsContentComponent } from './pages/statistics/statistics-content/statistics-content.component';
import { EventsContentComponent } from './pages/events/events-content/events-content.component';
import { FormsModule } from '@angular/forms';

/* kendo modules */
import { GridModule, ExcelModule, PDFModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule, MultiSelectModule, DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { ChartsModule } from '@progress/kendo-angular-charts';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        StatisticsComponent,
        EventsComponent,
        AthletesComponent,
        WatchComponent,
        StoreComponent,
        HomeContentComponent,
        TermsPoliciesComponent,
        AboutComponent,
        AthletesContentComponent,
        AthletesProfileIndividualComponent,
        WatchContentComponent,
        AboutContentComponent,
        StoreContentComponent,
        StatisticsContentComponent,
        EventsContentComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        LazyLoadImageModule.forRoot({
            preset: intersectionObserverPreset
        }),
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HttpClientModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatNativeDateModule,
        MatMenuModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTabsModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSnackBarModule,
        MatGridListModule,
        MatTableModule,
        MatButtonToggleModule,
        MatNativeDateModule,
        MatChipsModule,
        MatStepperModule,
        MultiSelectModule,
        DropDownListModule,
        ExcelModule,
        ChartsModule,
        PDFModule,
        DateInputsModule,
        DropDownsModule,
        InputsModule,
        GridModule,
        FormsModule
    ],
    exports: [
        RouterModule,
        LazyLoadImageModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        FlexLayoutModule,
        HttpClientModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatNativeDateModule,
        MatMenuModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTabsModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSnackBarModule,
        MatGridListModule,
        MatTableModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatStepperModule,
        DateInputsModule,
        DropDownsModule,
        InputsModule,
        GridModule,
        ExcelModule,
        MatNativeDateModule,
        ChartsModule,
        MultiSelectModule,
        DropDownListModule,
        PDFModule,
        FormsModule
    ],
    providers: [
        HomeContentService,
        AthletesContentService,
        EventsContentService,
        WatchContentService
    ],
    entryComponents: [
        AthletesProfileIndividualComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
