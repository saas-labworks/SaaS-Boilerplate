export interface UserDocument {
  _id: string;
  name?: string;
  email: string;
  image?: string;
  customerId?: string;
  emailVerified?: Date;
  hasAccess: boolean;
  priceId: string;
}

export interface AccountDocument {
  userId: UserDocument;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
}

export interface SessionDocument {
  userId: UserDocument;
  expires: Date;
  sessionToken: string;
}

export interface VerificationTokenDocument {
  identifier: string;
  token: string;
  expires: Date;
}
