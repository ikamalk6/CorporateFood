export type ActionType = {
  type: string;
  payload: any;
};

export class AuthModal {
  token: string = '';
}
export class SplashModal {
  isLoading: boolean = true;
}

export type ReducersModal = {
  AuthReducer: AuthModal;
  SplashReducer: SplashModal;
};
