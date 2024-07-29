export enum RequestStateEnum {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  LOADING = 'LOADING'
}

export interface SuccessState<T> {
  type: RequestStateEnum.SUCCESS,
  data: T
}

export interface LoadingState {
  type: RequestStateEnum.LOADING
}

export interface ErrorState {
  type: RequestStateEnum.ERROR,
  message: string
}

export type RequestState<T> = SuccessState<T> | LoadingState |ErrorState;