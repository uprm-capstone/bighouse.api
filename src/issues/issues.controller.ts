import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { Issues } from 'src/Models/issues.model';
import { createIssuesDto } from './dto/createIssues.dto';
import { Issue } from './entities/issue.entity';
import { IssuesService } from './issues.service';

@Controller('issues')
export class IssuesController {
    constructor(private readonly issuesService: IssuesService) {}
    @Post('/create-issue')
    createIssue(@Body() issue: createIssuesDto): Issue {
      return this.issuesService.createIssue(issue);
    }
  
    @Get()
    getAllIssues(): Issues[] {
      return this.issuesService.getAllIssues();
    }
  
    @Put('/update-issue')
    updateOccupy(@Body() issue: createIssuesDto): Issues {
      return this.issuesService.updateIssue(issue);
    }
  
    @Delete('/delete-issue')
    deleteOccupy(@Body() issue: {Issue_ID:number}) : {Issue_ID: number} {
      return this.issuesService.deleteIssue(issue);
    }
  
    @Get('/get-issue')
    getApartmentTotalCost(@Body() issue: {Issue_ID:number}) : Issues {
      return this.issuesService.getIssue(issue);
    }

}
