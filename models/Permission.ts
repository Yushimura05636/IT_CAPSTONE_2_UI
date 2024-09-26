class Permission {
    // Document map permissions (Button authorizations)
    private _BUTTON_AUTHORIZATIONS = 2;

    // Action permissions
    private _CREATE = 1;
    private _UPDATE = 2;
    private _DELETE = 3;
    private _VIEW = 4;

    // Routes for different entities (Numeric values from database)
    private _USER_ACCOUNTS = 1;
    private _BUTTON_AUTHORIZATIONS_ROUTE = 2;
    private _LIBRARIES = 3;
    private _CUSTOMERS = 4;
    private _CUSTOMER_GROUPS = 5;
    private _EMPLOYEES = 6;
    private _FACTOR_RATES = 7;
    private _PAYMENT_DURATION = 8;
    private _PAYMENT_FREQUENCIES = 9;
    private _PERSONALITIES = 10;
    private _DOCUMENT_MAPS = 11;
    private _DOCUMENT_MAP_PERMISSIONS = 12;
    private _DOCUMENT_PERMISSIONS = 13;
    private _LOAN_COUNT = 14;
    private _FACTOR_RATE = 15;
    private _FEES = 16;

    // Methods to get the constants
    public get BUTTON_AUTHORIZATIONS() {
        return this._BUTTON_AUTHORIZATIONS;
    }

    public get CREATE() {
        return this._CREATE;
    }

    public get UPDATE() {
        return this._UPDATE;
    }

    public get DELETE() {
        return this._DELETE;
    }

    public get VIEW() {
        return this._VIEW;
    }

    public get USER_ACCOUNTS() {
        return this._USER_ACCOUNTS;
    }

    public get LIBRARIES() {
        return this._LIBRARIES;
    }

    public get CUSTOMERS() {
        return this._CUSTOMERS;
    }

    public get CUSTOMER_GROUPS() {
        return this._CUSTOMER_GROUPS;
    }

    public get EMPLOYEES() {
        return this._EMPLOYEES;
    }

    public get FACTOR_RATES() {
        return this._FACTOR_RATES;
    }

    public get PAYMENT_DURATION() {
        return this._PAYMENT_DURATION;
    }

    public get PAYMENT_FREQUENCIES() {
        return this._PAYMENT_FREQUENCIES;
    }

    public get PERSONALITIES() {
        return this._PERSONALITIES;
    }

    public get DOCUMENT_MAPS() {
        return this._DOCUMENT_MAPS;
    }

    public get DOCUMENT_MAP_PERMISSIONS() {
        return this._DOCUMENT_MAP_PERMISSIONS;
    }

    public get DOCUMENT_PERMISSIONS() {
        return this._DOCUMENT_PERMISSIONS;
    }

    public get LOAN_COUNT() {
        return this._LOAN_COUNT;
    }

    public get FACTOR_RATE() {
        return this._FACTOR_RATE;
    }

    public get FEES() {
        return this._FEES;
    }
}

export const PermissionService = new Permission();
