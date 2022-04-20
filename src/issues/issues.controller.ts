import { Body, Controller, Post, Get, Put, Delete, Query } from '@nestjs/common';
import { Issues } from 'src/Models/issues.model';
import { createIssuesDto } from './dto/createIssues.dto';
import { Issue } from './entities/issue.entity';
import { IssuesService } from './issues.service';

@Controller('issues')
export class IssuesController {
    constructor(private readonly issuesService: IssuesService) {}
    @Post('/create-issue')
    createIssue(@Body() issue: {issue_id:number, title:string, apartment_id: number, status: Boolean, date_created:Date, date_closed:Date, description:string, issue_type: string}): Promise<any> {
      console.log("New issue:");
      console.log(issue);
      return this.issuesService.createIssue(issue);
    }
  
    @Get()
    getAllIssues(): Promise<any> {
      return this.issuesService.getAllIssues();
    }

    @Get('/get-apartment-issues')
    getApartmentIssues(@Query() query) : Promise<any> {
      return this.issuesService.getApartmentIssues(query);
    }
  
    @Put('/update-issue')
    updateIssue(@Body() issue: {issue_id:number, title:string, apartment_id: number, status: Boolean, date_created:Date, date_closed:Date, description:string, issue_type: string}): Promise<any> {
      return this.issuesService.updateIssue(issue);
    }
  
    @Delete('/delete-issue')
    deleteIssue(@Body() issue: {issue_id:number}) : Promise<any> {
      return this.issuesService.deleteIssue(issue);
    }
  
    @Get('/get-issue')
    getIssue(@Body() issue: {issue_id:number}) : Promise<any> {
      return this.issuesService.getIssue(issue);
    }
    
    // For the time being this si the same as getAllIssues. Once query is added can be sorted by date using the order by Date_Created operation.
    // @Get('/get-issue-ordered')
    // getIssueOrdered() : Issues[] {
    //   return this.issuesService.getAllIssuesOrdered();
    // }

}
