export const MODAL_STYLE = {
    position: "fixed",
    top: 0, bottom: 0, left: 0, right: 0,
};

export const BACKDROP_STYLE = {
    zIndex: 1001,
    backgroundColor: "#FFFFFF",
    opacity: 0.3,
};

const API                            = `${process.env.HOSTNAME}:${process.env.PORT}/api`;
export const AUTHENTICATE_API        = `${API}/authenticate/`;
export const SIGNIN_API              = `${API}/signin/`;
export const SIGNOUT_API             = `${API}/signout/`;
export const SIGNUP_API              = `${API}/signup/`;
export const ACTIVATE_API            = `${API}/activate/`;
export const USER_PROFILE_API        = `${API}/user/`;
export const ACCOUNT_API             = `${API}/accounts/`;
export const ACCOUNT_TRANSACTION_API = `${API}/accounts/%s/transactions/`;
export const TRANSACTION_API         = `${API}/transactions/`;
export const TRANSACTION_DETAIL_API  = `${API}/transactions/%s/`;
export const CATEGORY_API            = `${API}/categories/`;
export const QUOTE_API               = `${API}/quotes/`;

export const GET                        = "GET";
export const POST                       = "POST";
export const DELETE                     = "DELETE";
export const PUT                        = "PUT";
export const TRANSACTIONS               = "TRANSACTIONS";
export const SWITCH_ACTIVE_APP          = "SWITCH_ACTIVE_APP";
export const OPEN_APP                   = "OPEN_APP";
export const CLOSE_APP                  = "CLOSE_APP";
export const SIGN_IN                    = "SIGN_IN";
export const SIGN_UP                    = "SIGN_UP";
export const AUTHENTICATE_REQUEST       = "AUTHENTICATE_REQUEST";
export const AUTHENTICATE_SUCCESS       = "AUTHENTICATE_SUCCESS";
export const AUTHENTICATE_FAILURE       = "AUTHENTICATE_FAILURE";
export const SIGNIN_USER_REQUEST        = "SIGNIN_USER_REQUEST";
export const SIGNIN_USER_SUCCESS        = "SIGNIN_USER_SUCCESS";
export const SIGNIN_USER_FAILURE        = "SIGNIN_USER_FAILURE";
export const SIGNOUT_USER_REQUEST       = "SIGNOUT_USER_REQUEST";
export const SIGNOUT_USER_SUCCESS       = "SIGNOUT_USER_SUCCESS";
export const SIGNOUT_USER_FAILURE       = "SIGNOUT_USER_FAILURE";
export const SIGNUP_USER_REQUEST        = "SIGNUP_USER_REQUEST";
export const SIGNUP_USER_SUCCESS        = "SIGNUP_USER_SUCCESS";
export const SIGNUP_USER_FAILURE        = "SIGNUP_USER_FAILURE";
export const ACTIVATE_USER_REQUEST      = "ACTIVATE_USER_REQUEST";
export const ACTIVATE_USER_SUCCESS      = "ACTIVATE_USER_SUCCESS";
export const ACTIVATE_USER_FAILURE      = "ACTIVATE_USER_FAILURE";
export const GET_USER_PROFILE_REQUEST   = "GET_USER_PROFILE_REQUEST";
export const GET_USER_PROFILE_SUCCESS   = "GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_FAILURE   = "GET_USER_PROFILE_FAILURE";
export const GET_ACCOUNTS_REQUEST       = "GET_ACCOUNTS_REQUEST";
export const GET_ACCOUNTS_SUCCESS       = "GET_ACCOUNTS_SUCCESS";
export const GET_ACCOUNTS_FAILURE       = "GET_ACCOUNTS_FAILURE";
export const CREATE_ACCOUNT_REQUEST     = "CREATE_ACCOUNT_REQUEST";
export const CREATE_ACCOUNT_SUCCESS     = "CREATE_ACCOUNT_SUCCESS";
export const CREATE_ACCOUNT_FAILURE     = "CREATE_ACCOUNT_FAILURE";
export const SWITCH_ACCOUNT             = "SWITCH_ACCOUNT";
export const GET_TRANSACTIONS_REQUEST   = "GET_TRANSACTIONS_REQUEST";
export const GET_TRANSACTIONS_SUCCESS   = "GET_TRANSACTIONS_SUCCESS";
export const GET_TRANSACTIONS_FAILURE   = "GET_TRANSACTIONS_FAILURE";
export const CREATE_TRANSACTION_REQUEST = "CREATE_TRANSACTION_REQUEST";
export const CREATE_TRANSACTION_SUCCESS = "CREATE_TRANSACTION_SUCCESS";
export const CREATE_TRANSACTION_FAILURE = "CREATE_TRANSACTION_FAILURE";
export const DELETE_TRANSACTION_REQUEST = "DELETE_TRANSACTION_REQUEST";
export const DELETE_TRANSACTION_SUCCESS = "DELETE_TRANSACTION_SUCCESS";
export const DELETE_TRANSACTION_FAILURE = "DELETE_TRANSACTION_FAILURE";
export const GET_CATEGORIES_REQUEST     = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_SUCCESS     = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAILURE     = "GET_CATEGORIES_FAILURE";
export const CREATE_CATEGORY_REQUEST    = "CREATE_CATEGORY_REQUEST";
export const CREATE_CATEGORY_SUCCESS    = "CREATE_CATEGORY_SUCCESS";
export const CREATE_CATEGORY_FAILURE    = "CREATE_CATEGORY_FAILURE";
export const GET_QUOTES_REQUEST         = "GET_QUOTES_REQUEST";
export const GET_QUOTES_SUCCESS         = "GET_QUOTES_SUCCESS";
export const GET_QUOTES_FAILURE         = "GET_QUOTES_FAILURE";
export const NOT_SET                    = "NOT_SET";
export const PENDING                    = "PENDING";
export const LEDGER                     = "Ledger";
export const ANALYZER                   = "Analyzer";
