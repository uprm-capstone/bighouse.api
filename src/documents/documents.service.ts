import { Injectable } from '@nestjs/common';
import { Documents } from 'src/Models/documents.model';
import { createDocumentsDto } from './dto/createDocuments.dto';
import { users } from 'src/users/users.service';
import { InjectModel } from '@nestjs/sequelize';

const documents: Documents[] = [];

@Injectable()
export class DocumentsService {

  constructor(
    @InjectModel(Documents)
    private DocumentsModel: typeof Documents,
  ) {}

  async createDocument(document:  {user_id: number, document: string, sign_on: Date, signature: string, require_signature: boolean}): Promise<any> {
    const result = this.DocumentsModel.create(document)
    .catch(function(err){
      return {Error: err};
    });
    return result;
  }

  getDocument(id: {document_id:number}): Promise<any> {
    const document_id = id.document_id;
    return this.DocumentsModel.findOne({ where: { document_id } });
  }

  async getAllDocuments(): Promise<any> {
  return this.DocumentsModel.findAll();
  }

  async updateDocument(document:  {document_id: number, user_id: number, document: string, sign_on: Date, signature: string, require_signature: boolean}): Promise<any> {
    const document_id = document.document_id;
    return this.DocumentsModel.update(document, { where: { document_id } });
  }

  async deleteDocument(id: {document_id:number}): Promise<any> {
    const issue = await this.getDocument(id);
    await issue.destroy();
    return issue;
  }

  // createDocument(document: createDocumentsDto) {
  //   const newDocument = new Documents(
  //     document.Document_ID,
  //     document.User_ID,
  //     document.Document,
  //     document.Sign_On,
  //     document.Signature,
  //     document.Require_Signature,
  //   );
  //   // const userVerify = users.findIndex((object) => {
  //   //   return object.user_id == document.User_ID;
  //   // });
  //   // if(userVerify != -1){
  //   //   documents.push(newDocument);
  //   // }
  //   return newDocument;
  // }

  // getAllDocuments() {
  //   return documents;
  // }

  // getDocument(id: {Document_ID:number}) {
  //   const index = documents.findIndex((object) => {
  //     return object.Document_ID == id.Document_ID;
  //   });
  //   return documents[index];
  // }

  // updateDocument(document: createDocumentsDto) {
  //   const newDocument = new Documents(
  //     document.Document_ID,
  //     document.User_ID,
  //     document.Document,
  //     document.Sign_On,
  //     document.Signature,
  //     document.Require_Signature,
  //   );

  //   // const userVerify = users.findIndex((object) => {
  //   //   return object.user_id == document.User_ID;
  //   // });
  //   // if(userVerify != -1){
  //   //   documents.forEach((element) => {
  //   //   if (element.Document_ID == document.Document_ID) {
  //   //     element.Document_ID = document.Document_ID;
  //   //     element.User_ID = document.User_ID;
  //   //     element.Document = document.Document;
  //   //     element.Sign_On = document.Sign_On;
  //   //     element.Signature = document.Signature;
  //   //     element.Require_Signature = document.Require_Signature;
  //   //   }
  //   // });
  //   // }
  //   return newDocument;
  // }

  // deleteDocument(id: {Document_ID:number}) {
  //   const holder = {id};
  //   const index = documents.findIndex((object) => {
  //     return object.Document_ID == id.Document_ID;
  //   });

  //   if(index != -1){
  //     documents.splice(index,1);
  //   }
  //   return holder.id;
  // }
}