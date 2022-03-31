import { Injectable } from '@nestjs/common';
import { Issues } from 'src/Models/issues.model';
import { createIssuesDto } from './dto/createIssues.dto';
import { apartments } from 'src/apartment/apartment.service';
import { InjectModel } from '@nestjs/sequelize';

const issues: Issues[] = [];

@Injectable()
export class IssuesService {

  constructor(
    @InjectModel(Issues)
    private IssuesModel: typeof Issues,
  ) {}

  async createIssue(issue:  {title:string, apartment_id: number, status: Boolean, date_created:Date, date_closed:Date, description:string, issue_type: string}): Promise<any> {
    this.IssuesModel.create(issue);
  }

  getIssue(id: {issue_id:number}): Promise<any> {
    const issue_id = id.issue_id;
    return this.IssuesModel.findOne({ where: { issue_id } });
  }

  async getAllIssues(): Promise<any> {
  return this.IssuesModel.findAll();
  }

  async updateIssue(issue:  {issue_id:number, title:string, apartment_id: number, status: Boolean, date_created:Date, date_closed:Date, description:string, issue_type: string}): Promise<any> {
    const issue_id = issue.issue_id;
    return this.IssuesModel.update(issue, { where: { issue_id } });
  }

  async deleteIssue(id: {issue_id:number}): Promise<any> {
    const issue = await this.getIssue(id);
    await issue.destroy();
    return issue;
  }

  // async getTerm(id: {occupy_id:number}): Promise<any>{
  //   const occupy_id = id.occupy_id;
  //   return this.IssuesModel.findOne({attributes: ['start_date', 'end_date'], where:{occupy_id}})
  // }

  // async getApartmentOccupied(id: {occupy_id:number}): Promise<any>{
  //   const occupy_id = id.occupy_id;
  //   return this.IssuesModel.findOne({attributes: ['apartment_id'], where:{occupy_id}})
  // }

  // async getUserOccupied(id: {occupy_id:number}): Promise<any>{
  //   const occupy_id = id.occupy_id;
  //   return this.IssuesModel.findOne({attributes: ['user_id'], where:{occupy_id}})
  // }

  // async getUserOccupiedWithAptm(id: {apartment_id:number}): Promise<any>{
  //   const apartment_id = id.apartment_id;
  //   return this.IssuesModel.findOne({attributes: ['user_id'], where:{apartment_id}})
  // }

  // async getAptmOccupiedWithUser(id: {user_id:number}): Promise<any>{
  //   const user_id = id.user_id;
  //   return this.IssuesModel.findAll({attributes: ['apartment_id'], where:{user_id}})
  // }

  // createIssue(issue: createIssuesDto) {
  //   const newIssue = new Issues(
  //     issue.Issue_ID,
  //     issue.Title,
  //     issue.Apartment_ID,
  //     issue.Status,
  //     issue.Date_Created,
  //     issue.Date_Closed,
  //     issue.Description,
  //     issue.Issue_Type
  //   );

  //   // const index = apartments.findIndex((object) => {
  //   //   return object.Apartment_ID == issue.Apartment_ID;
  //   // });
  //   // if(index != -1){
  //   //   issues.push(newIssue);
  //   // }
  //   return newIssue;
  // }

  // getAllIssues() {
  //   return issues;
  // }

  // // getAllIssuesOrdered() {
  // //   return 
  // // }

  // getIssue(id: {Issue_ID:number}) {
  //   const index = issues.findIndex((object) => {
  //     return object.Issue_ID == id.Issue_ID;
  //   });
  //   return issues[index];
  // }

  // updateIssue(issue: createIssuesDto) {
  //   const newIssue = new Issues(
  //     issue.Issue_ID,
  //     issue.Title,
  //     issue.Apartment_ID,
  //     issue.Status,
  //     issue.Date_Created,
  //     issue.Date_Closed,
  //     issue.Description,
  //     issue.Issue_Type
  //   );

  //   const index = issues.findIndex((object) => {
  //     return object.Apartment_ID == issue.Apartment_ID;
  //   });
  //   if(index != -1){
  //     issues.forEach((element) => {
  //     if (element.Issue_ID == issue.Issue_ID) {
  //       element.Issue_ID = issue.Issue_ID;
  //       element.Title = issue.Title;
  //       element.Apartment_ID = issue.Apartment_ID;
  //       element.Status = issue.Status;
  //       element.Date_Created = issue.Date_Created;
  //       element.Date_Closed = issue.Date_Closed;
  //       element.Description = issue.Description;
  //       element.Issue_Type = issue.Issue_Type;
  //     }
  //   });
  //   }
    
  //   return newIssue;
  // }

  // deleteIssue(id: {Issue_ID:number}) {
  //   const holder = {id};
  //   const index = issues.findIndex((object) => {
  //     return object.Issue_ID == id.Issue_ID;
  //   });

  //   if(index != -1){
  //     issues.splice(index,1);
  //   }
  //   return holder.id;
  // }
}
