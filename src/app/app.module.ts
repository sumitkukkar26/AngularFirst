import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import {IssueService} from './issue.service';
import { StarComponent } from './star/star.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { RiskComponent } from './risk/risk.component';
import { CostComponent } from './cost/cost.component';
import { QualityComponent } from './quality/quality.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    StarComponent,
    TitlecaseComponent,
    RiskComponent,
    CostComponent,
    QualityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
