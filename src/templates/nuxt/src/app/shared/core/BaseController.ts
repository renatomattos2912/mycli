import { ControllerResponse, ResponseTypesEnum } from './ControllerResponse';

/* eslint-disable no-console */
export abstract class BaseController {
  protected abstract executeImpl(
    req: any,
    res: any
  ): Promise<void | ControllerResponse<any>>;

  public async execute(req: any, res: any): Promise<void> {
    try {
      await this.executeImpl(req, res);
    } catch (err) {
      console.log(`[BaseController]: Uncaught controller error`);
      this.fail('An unexpected error occurred');
    }
  }

  public static jsonResponse(message: string) {
    return { message };
  }

  public ok<T>(dto?: T) {
    const res: ControllerResponse<T> = {
      type: ResponseTypesEnum.SUCCESS,
    };

    if (dto) {
      res.data = dto;
      return res;
    } else {
      return res;
    }
  }

  public created() {
    return true;
  }

  public clientError(message?: string) {
    return BaseController.jsonResponse(message || 'Unauthorized');
  }

  public unauthorized(message?: string) {
    return BaseController.jsonResponse(message || 'Unauthorized');
  }

  public forbidden(message?: string) {
    return BaseController.jsonResponse(message || 'Forbidden');
  }

  public notFound(message?: string) {
    return BaseController.jsonResponse(message || 'Not found');
  }

  public conflict(message?: string) {
    return BaseController.jsonResponse(message || 'Conflict');
  }

  public tooMany(message?: string) {
    return BaseController.jsonResponse(message || 'Too many requests');
  }

  public todo() {
    return BaseController.jsonResponse('TODO');
  }

  public fail(error: Error | any) {
    const res: ControllerResponse<any> = {
      type: ResponseTypesEnum.ERROR,
      message: error.message,
      details: error.details,
      httpCode: error.httpCode,
      data: error.error,
    };

    return res;
  }
}
