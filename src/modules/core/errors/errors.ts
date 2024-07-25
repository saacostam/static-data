export class ValueError extends Error {
  constructor(msg?: string) {
    super(`Value Error${msg ? `: ${msg}` : ''}`);
  }
}
