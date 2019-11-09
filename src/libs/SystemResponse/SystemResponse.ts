import CodeMessage from './codeMessage'
import StatusCodes from './statusCode';

interface IErrorResponse {
  message: string;
  status: number;
  error: any;
}

interface IResponse {
  message: string;
  status: number;
}

interface ISuccussResponse {
  message: string;
  status: number;
  data: any;
}

class SystemResponse {
  static getInstance(): SystemResponse {
    return new SystemResponse();
  }

  getErrorResponse(message: string, code: number, error?: any): IErrorResponse {
    return {
      message: message || CodeMessage[code],
      status: code,
      error: error || CodeMessage[code],
    }
  }

  getResponse(message: string, code: number): IResponse {
    return {
      message : message || CodeMessage[code],
      status: code
    }
  }

  static continueInfo(message: string): IResponse {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.CONTINUE);
  }

  static switchingProtocolsInfo(message: string): IResponse {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.SWITCHING_PROTOCOLS);
  }
  
  static success(message: string, data: any): ISuccussResponse {
    return {
      message: message || CodeMessage[StatusCodes.SUCCESS],
      status: StatusCodes.SUCCESS,
      data: data || {},
    }
  }

  static multipleChoicesRedirect(message: string): IResponse {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.MULTIPLE_CHOICES);
  }

  static movedPermanentlyRedirect(message: string): IResponse {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.MOVED_PERMANENTLY);
  }

  static foundRedirect(message: string): IResponse {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.FOUND);
  }

  static seeOtherRedirect(message: string): IResponse {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.SEE_OTHER);
  }

  static notModifiedRedirect(message: string): IResponse {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.NOT_MODIFIED);
  }

  static useProxyRedirect(message: string): IResponse {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.USE_PROXY);
  }

  static temporaryRedirect(message: string): IResponse {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.TEMPORARY_REDIRECT);
  }

  static badRequestError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.BAD_REQUEST, error);
  }

  static unauthorizedError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.UNAUTHORIZED, error);
  }

  static paymentRequiredError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.PAYMENT_REQUIRED, error);
  }

  static forbiddenError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.FORBIDDEN, error);
  }

  static notFoundError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.NOT_FOUND, error);
  }

  static methodNotAllowedError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.METHOD_NOT_ALLOWED, error);
  }

  static notAcceptableError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.NOT_ACCEPTABLE, error);
  }

  static proxyAuthRequiredError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.PROXY_AUTHENTICATION_REQUIRED, error);
  }

  static requestTimeoutError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.REQUEST_TIMEOUT, error);
  }

  static conflictError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.CONFLICT, error);
  }

  static goneError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.GONE, error);
  }

  static lengthRequiredError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.LENGTH_REQUIRED, error);
  }

  static preconditionFailedError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.PRECONDITION_FAILED, error);
  }

  static requestEntityTooLargeError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.REQUEST_ENTITY_TOO_LARGE, error);
  }

  static requestUriTooLongError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.REQUEST_ENTITY_TOO_LONG, error);
  }

  static unsupportedMediaTypeError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.UNSUPPORTED_MEDIA_TYPE, error);
  }

  static rangeNotSatisfiableError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE, error);
  }

  static expectationFailedError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.EXPECTATION_FAILED, error);
  }

  static unProcessableEntityError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.UN_PROCESSABLE_ENTITY, error);
  }

  static internalServerError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.INTERNAL_SERVER_ERROR, error);
  }

  static notImplementedError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.NOT_IMPLEMENTED, error);
  }

  static badGatewayError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.BAD_GATEWAY, error);
  }

  static serviceUnavailableError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.SERVICE_UNAVAILABLE, error);
  }

  static gatewayTimeoutError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.GATEWAY_TIMEOUT, error);
  }

  static httpVersionNotSupportedError(message: string, error?: any): IErrorResponse {
    return SystemResponse.getInstance().getErrorResponse(message, StatusCodes.HTTP_VERSION_NOT_SUPPORTED, error);
  }
}

export default SystemResponse;
