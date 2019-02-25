import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BugTrackerJHipsterSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { SelfticketComponent } from 'app/home/selfticket/selfticket.component';

@NgModule({
    imports: [BugTrackerJHipsterSharedModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent, SelfticketComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BugTrackerJHipsterHomeModule {}
