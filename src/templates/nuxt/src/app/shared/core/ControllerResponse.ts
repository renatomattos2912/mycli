export enum ResponseTypesEnum {
  SUCCESS = 'Success',
  ERROR = 'Error',
}

export interface ControllerResponse<T> {
  type: ResponseTypesEnum;
  data?: T;
  message?: string;
  details?: string | undefined;
  httpCode?: number | undefined;
}
