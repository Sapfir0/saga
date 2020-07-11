const TYPES = {
    ApiHelper: Symbol.for('ApiHelper'),
    BaseInteractionService: Symbol.for('BaseInteractionService'),
    AuthenticationInteractionService: Symbol.for('AuthenticationInteractionService'),
    Saga: Symbol.for('Saga'),
    LocalStorage: Symbol.for('LocalStorage'),
    TokenService: Symbol.for('TokenService'),
    Redirection: Symbol.for('Redirection'),
    ColorListAction: Symbol.for('ColorListAction'),

    ColorsListAction: Symbol.for('ColorsListAction'),
    ColorListSaga: Symbol.for('ColorListSaga'),
    ColorsListSaga: Symbol.for('ColorsListSaga'),

    LoginAction: Symbol.for('LoginAction'),
    LogoutAction: Symbol.for('LogoutAction'),
    LoginSaga: Symbol.for('LoginSaga'),
    LogoutSaga: Symbol.for('LogoutSaga')
}

export { TYPES }