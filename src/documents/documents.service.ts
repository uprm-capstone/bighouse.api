import { Injectable } from '@nestjs/common';
import { Documents } from 'src/Models/documents.model';
import { createDocumentsDto } from './dto/createDocuments.dto';

const documents: Documents[] = [];

@Injectable()
export class DocumentsService {
  createDocument(document: createDocumentsDto) {
    const newDocument = new Documents(
      document.Document_ID,
      document.User_ID,
      document.Document,
      document.Sign_On,
      document.Signature,
      document.Require_Signature,
    );
    documents.push(newDocument);
    return newDocument;
  }

  getAllDocuments() {
    return documents;
  }

  getDocument(id: {Document_ID:number}) {
    const index = documents.findIndex((object) => {
      return object.Document_ID == id.Document_ID;
    });
    return documents[index];
  }

  updateDocument(document: createDocumentsDto) {
    const newDocument = new Documents(
      document.Document_ID,
      document.User_ID,
      document.Document,
      document.Sign_On,
      document.Signature,
      document.Require_Signature,
    );

    documents.forEach((element) => {
      if (element.Document_ID == document.Document_ID) {
        element.Document_ID = document.Document_ID;
        element.User_ID = document.User_ID;
        element.Document = document.Document;
        element.Sign_On = document.Sign_On;
        element.Signature = document.Signature;
        element.Require_Signature = document.Require_Signature;
      }
    });
    return newDocument;
  }

  deleteDocument(id: {Document_ID:number}) {
    const holder = {id};
    const index = documents.findIndex((object) => {
      return object.Document_ID == id.Document_ID;
    });

    if(index != -1){
      documents.splice(index,1);
    }
    return holder.id;
  }
}