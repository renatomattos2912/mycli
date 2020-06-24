interface IUseCaseError {
  message: string;
  details?: string;
  httpCode?: number;
}

export abstract class UseCaseError implements IUseCaseError {
  public readonly message: string;
  public readonly details: string;
  public readonly httpCode: number;
  // public readonly response: any;
  public readonly error: any;

  constructor(message: string, details: string, httpCode: number) {
    this.message = message;
    this.details = details;
    this.httpCode = httpCode;
  }
}
