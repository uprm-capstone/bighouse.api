export class Issues {
    constructor(
      public Issue_ID: number,
      public Title: string,
      public Apartment_ID: number,
      public Status: Boolean,
      public Date_Created: Date,
      public Date_Closed: Date,
      public Description: string,
      public Issue_Type: string,
    ) {}
  }