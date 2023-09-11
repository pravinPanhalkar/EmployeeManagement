export interface Employee{
    id:number,
    name:string,
    username:string,
    password:string,
    address:string,
    finance:array
}

export interface LoggedUser{
    name:string,
    
}


export interface userContextType{
    empList:Employee[];
    isUserLogged:false;
    user:LoggedUser;
    saveUser:(usr:LoggedUser)=>void;
    saveEmp:(emp:Employee)=>void;
    updateEmp:(emp:Employee)=>void;

}