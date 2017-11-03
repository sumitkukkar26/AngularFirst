import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
@Component({
  selector: 'issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues;
  constructor(issue: IssueService) { 
    this.issues = issue.getIssues();
  }

  ngOnInit() {
  }

}
