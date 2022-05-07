export interface ErrorWithMessage {
  message: string;
}

export interface ErrorType {
  status: number;
  data: ErrorWithMessage;
}
