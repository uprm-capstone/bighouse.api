import { Injectable } from '@nestjs/common';
import { Issues } from 'src/Models/issues.model';
import { createIssuesDto } from './dto/createIssues.dto';

const issues: Issues[] = [];

@Injectable()
export class IssuesService {
  createIssue(issue: createIssuesDto) {
    const newIssue = new Issues(
      issue.Issue_ID,
      issue.Title,
      issue.Apartment_ID,
      issue.Status,
      issue.Date_Created,
      issue.Date_Closed,
      issue.Description,
      issue.Issue_Type
    );
    issues.push(newIssue);
    return newIssue;
  }

  getAllIssues() {
    return issues;
  }

  getIssue(id: {Issue_ID:number}) {
    const index = issues.findIndex((object) => {
      return object.Issue_ID == id.Issue_ID;
    });
    return issues[index];
  }

  updateIssue(issue: createIssuesDto) {
    const newIssue = new Issues(
      issue.Issue_ID,
      issue.Title,
      issue.Apartment_ID,
      issue.Status,
      issue.Date_Created,
      issue.Date_Closed,
      issue.Description,
      issue.Issue_Type
    );

    issues.forEach((element) => {
      if (element.Issue_ID == issue.Issue_ID) {
        element.Issue_ID = issue.Issue_ID;
        element.Title = issue.Title;
        element.Apartment_ID = issue.Apartment_ID;
        element.Status = issue.Status;
        element.Date_Created = issue.Date_Created;
        element.Date_Closed = issue.Date_Closed;
        element.Description = issue.Description;
        element.Issue_Type = issue.Issue_Type;
      }
    });
    return newIssue;
  }

  deleteIssue(id: {Issue_ID:number}) {
    const holder = {id};
    const index = issues.findIndex((object) => {
      return object.Issue_ID == id.Issue_ID;
    });

    issues.splice(index,1);
    return holder.id;
  }
}
