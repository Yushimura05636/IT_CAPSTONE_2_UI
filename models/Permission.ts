class Permission {
    public _USERACCOUNT = 1;
    public _LIBRARIES = 2;
    public _CUSTOMERS = 3;
    public _EMPLOYEES = 4;
    public _FACTORRATE = 5;
    public _PAYMENTDURATION = 6;
    public _PAYMENTFREQUENCY = 7;
    public _LOANCOUNT = 8;

    //permission
    public _CREATE = "create"
    public _UPDATE = "update"
    public _DELETE = "delete"
    public _VIEW = "view"
}

export const PermissionService = new Permission();