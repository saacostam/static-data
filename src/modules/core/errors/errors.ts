export class NotFoundException extends Error {
  constructor(entity: string) {
    super(`[Not Found]: ${entity} not found`);
  }
}

export class BadRequestException extends Error {
  constructor(msg: string) {
    super(`[Bad Request]: ${msg}`);
  }
}

export class ValueException extends Error {
  constructor(msg: string) {
    super(`[Value Error]: ${msg}`);
  }
}
