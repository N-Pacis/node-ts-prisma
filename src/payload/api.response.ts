class ApiResponse{
    
    private static status:number | undefined;

    private static message:string | undefined;

    private static data:object[] | object | undefined;

    public ApiResponse(){
        
    }

    public static success(message:string,data:object[] | object){
        this.status = 200;
        this.message = message
        this.data = data
    }
}