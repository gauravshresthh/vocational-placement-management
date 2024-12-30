import type { Method } from "axios";
export type ApiMethodType = Extract<
  Method,
  "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
>;

export type ApiResponseType<TResponse> = {
  status: number;
  success: boolean;
  message: string;
  payload: TResponse;
};

// export type ApiErrorType<TError> = Prettify<
//   AxiosError<{
//     success: boolean;
//     code: number;
//     message: string;
//     errors: TError;
//   }>
// >;

// export type WithPaginationResponseType<TPaginatedResponse> = {
//   count: number;
//   total_pages: number;
//   current_page: number;
//   limit: number;
//   next: string | null;
//   previous: string | null;
//   results: TPaginatedResponse;
// };

// export type WithExtraResponseType<TPaginatedResponse, TExtraResponse> = {
//   count: number;
//   total_pages: number;
//   current_page: number;
//   limit: number;
//   next: string | null;
//   previous: string | null;
//   results: TPaginatedResponse;
//   extras: TExtraResponse;
// };
// export type Prettify<T> = {
//   [key in keyof T]: T[key];
// } & unknown;

// export type RawPaginationResponse<TPaginatedResponse> = Prettify<
//   ApiResponseType<WithPaginationResponseType<TPaginatedResponse>>
// >;
