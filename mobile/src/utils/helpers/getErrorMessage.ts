import { ErrorType, ErrorWithMessage } from 'src/types';

export const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
};

export const toErrorWithMessage = (maybeError: ErrorType): ErrorWithMessage => {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError.data.message));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError.data.message));
  }
};

export const getErrorMessage = (error: ErrorType) => {
  return toErrorWithMessage(error).message;
};
