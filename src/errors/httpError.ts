export interface IError {
  name: string,
  message: string,
  statusCode: number
}

export class HttpErrors extends Error {
  statusCode: number
  constructor ({ name, message, statusCode }: IError) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}
