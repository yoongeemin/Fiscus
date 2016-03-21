function define(name, value) {
	Object.defineProperty(module.exports, name, {
		value,
		enumerable: true,
		writable: false,
		configurable: false,
	});
}

const MODAL_STYLE = {
	position: "fixed",
	top: 0, bottom: 0, left: 0, right: 0,
};

const BACKDROP_STYLE = {
	zIndex: 1001,
	backgroundColor: "#FFFFFF",
	opacity: 0.3,
};

define("MODAL_STYLE", 					MODAL_STYLE);
define("BACKDROP_STYLE", 				BACKDROP_STYLE);

define("HOST",							"http://localhost:8000/");
define("SIGNIN_API",					`${module.exports.HOST}api/signin/`);
define("SIGNOUT_API",					`${module.exports.HOST}api/signout/`);
define("SIGNUP_API",					`${module.exports.HOST}api/signup/`);
define("ACTIVATE_API",					`${module.exports.HOST}api/activate/`);
define("USER_PROFILE_API",				`${module.exports.HOST}api/user/`);
define("ACCOUNT_API",					`${module.exports.HOST}api/accounts/`);
define("ACCOUNT_TRANSACTION_API",		`${module.exports.HOST}api/accounts/%s/transactions/`);

define("TRANSACTION_API",				`${module.exports.HOST}+"api/transactions/`);
define("TRANSACTION_DETAIL_API",		`${module.exports.HOST}+"api/transactions/%s/`);
define("CATEGORY_API",					`${module.exports.HOST}+"api/categories/`);
define("QUOTE_API",						`${module.exports.HOST}+"api/quotes/`);

define("GET", 							"GET");
define("POST", 							"POST");
define("DELETE", 						"DELETE");
define("PUT",	 						"PUT");

define("TRANSACTIONS", 					"TRANSACTIONS");

define("SWITCH_ACTIVE_APP", 			"SWITCH_ACTIVE_APP");
define("OPEN_APP", 						"OPEN_APP");
define("CLOSE_APP", 					"CLOSE_APP");

define("SIGN_IN",						"SIGN_IN");
define("SIGN_UP",						"SIGN_UP");
define("SIGNIN_USER_REQUEST", 			"SIGNIN_USER_REQUEST");
define("SIGNIN_USER_SUCCESS", 			"SIGNIN_USER_SUCCESS");
define("SIGNIN_USER_FAILURE", 			"SIGNIN_USER_FAILURE");
define("SIGNOUT_USER_REQUEST", 			"SIGNOUT_USER_REQUEST");
define("SIGNOUT_USER_SUCCESS", 			"SIGNOUT_USER_SUCCESS");
define("SIGNOUT_USER_FAILURE", 			"SIGNOUT_USER_FAILURE");
define("SIGNUP_USER_REQUEST", 			"SIGNUP_USER_REQUEST");
define("SIGNUP_USER_SUCCESS", 			"SIGNUP_USER_SUCCESS");
define("SIGNUP_USER_FAILURE", 			"SIGNUP_USER_FAILURE");
define("ACTIVATE_USER_REQUEST", 		"ACTIVATE_USER_REQUEST");
define("ACTIVATE_USER_SUCCESS", 		"ACTIVATE_USER_SUCCESS");
define("ACTIVATE_USER_FAILURE", 		"ACTIVATE_USER_FAILURE");

define("GET_USER_PROFILE_REQUEST",		"GET_USER_PROFILE_REQUEST");
define("GET_USER_PROFILE_SUCCESS",		"GET_USER_PROFILE_SUCCESS");
define("GET_USER_PROFILE_FAILURE",		"GET_USER_PROFILE_FAILURE");
define("GET_ACCOUNTS_REQUEST", 			"GET_ACCOUNTS_REQUEST");
define("GET_ACCOUNTS_SUCCESS", 			"GET_ACCOUNTS_SUCCESS");
define("GET_ACCOUNTS_FAILURE", 			"GET_ACCOUNTS_FAILURE");
define("CREATE_ACCOUNT_REQUEST", 		"CREATE_ACCOUNT_REQUEST");
define("CREATE_ACCOUNT_SUCCESS", 		"CREATE_ACCOUNT_SUCCESS");
define("CREATE_ACCOUNT_FAILURE", 		"CREATE_ACCOUNT_FAILURE");
define("SWITCH_ACCOUNT", 				"SWITCH_ACCOUNT");

define("GET_TRANSACTIONS_REQUEST", 		"GET_TRANSACTIONS_REQUEST");
define("GET_TRANSACTIONS_SUCCESS", 		"GET_TRANSACTIONS_SUCCESS");
define("GET_TRANSACTIONS_FAILURE", 		"GET_TRANSACTIONS_FAILURE");
define("CREATE_TRANSACTION_REQUEST", 	"CREATE_TRANSACTION_REQUEST");
define("CREATE_TRANSACTION_SUCCESS", 	"CREATE_TRANSACTION_SUCCESS");
define("CREATE_TRANSACTION_FAILURE", 	"CREATE_TRANSACTION_FAILURE");
define("DELETE_TRANSACTION_REQUEST", 	"DELETE_TRANSACTION_REQUEST");
define("DELETE_TRANSACTION_SUCCESS", 	"DELETE_TRANSACTION_SUCCESS");
define("DELETE_TRANSACTION_FAILURE", 	"DELETE_TRANSACTION_FAILURE");

define("GET_CATEGORIES_REQUEST", 		"GET_CATEGORIES_REQUEST");
define("GET_CATEGORIES_SUCCESS", 		"GET_CATEGORIES_SUCCESS");
define("GET_CATEGORIES_FAILURE", 		"GET_CATEGORIES_FAILURE");
define("CREATE_CATEGORY_REQUEST", 		"CREATE_CATEGORY_REQUEST");
define("CREATE_CATEGORY_SUCCESS", 		"CREATE_CATEGORY_SUCCESS");
define("CREATE_CATEGORY_FAILURE", 		"CREATE_CATEGORY_FAILURE");

define("GET_QUOTES_REQUEST", 			"GET_QUOTES_REQUEST");
define("GET_QUOTES_SUCCESS", 			"GET_QUOTES_SUCCESS");
define("GET_QUOTES_FAILURE", 			"GET_QUOTES_FAILURE");

define("NOT_SET", 						"NOT_SET");
define("PENDING", 						"PENDING");

define("LEDGER", 						"Ledger");
define("ANALYZER", 						"Analyzer");
