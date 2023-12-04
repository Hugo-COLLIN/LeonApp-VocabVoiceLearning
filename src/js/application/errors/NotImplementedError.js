export class NotImplementedError extends Error {
  constructor(message) {
    super();
    this.name = "NotImplementedError";
    this.message = message ?? "You cannot implement an abstract class.";
  }
}