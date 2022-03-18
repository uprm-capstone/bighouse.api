export class Documents {
    constructor(
      public Document_ID: number,
      public User_ID: number,
      public Document: string,
      public Sign_On: Date,
      public Signature: Text,
      public Require_Signature: Boolean,
    ) {}
  }