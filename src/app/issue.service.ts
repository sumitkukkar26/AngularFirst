import { Injectable } from '@angular/core';

@Injectable()
export class IssueService {

  getIssues() {
    //get data by calling Restful Webservice
    return ["Production PIT","Perf PITS","ATG PITS"];
  }

}
