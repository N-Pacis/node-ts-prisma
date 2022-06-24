class ApiResponse{
    
    private status:string;

    private message:string;

    private data:object[] | object;

    public ApiResponse(status:string,message:string,data:object[] | object){
        this.status = status;
        this.message = message;
        this.data = data;
    }
}