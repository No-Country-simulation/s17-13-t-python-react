export interface ResponseStatus<T> {
  data: T | null;
  success: boolean;
  errorMessage: string | null;
}
