angular.module("myApp").service("book", function ($q,$http) {
    this.getBooks = function () { 
        return  $http.get("http://localhost:4000/api/books").then(function(response) {
               if(response.status===200){
                  return response;
               }else{
                  return $q.error;
               }
  
    });
    };
    this.showBook=function(id){
        return $http.get("http://localhost:4000/api/book/"+id).then(function(response) {
               if(response.status===200){
                  return response.data;
               }else{
                  return $q.error;
               }
             
    });
    };
    this.updatebook=function(book){
         $http.put("http://localhost:4000/api/books",book).then(function(response) {
               if(response.status===200){
                  return response.data;
               }else{
                  return $q.error;
               }
             
    });

    };
      this.addbook=function(book){
         $http.post("http://localhost:4000/api/books",book).then(function(response) {
               if(response.status===200){
                  return response;
               }else{
                  return $q.error;
               }
             
    });

    };
    this.deleteBook=function(id){

       return    $http.delete("http://localhost:4000/api/book/"+id).then(function(response) {
               if(response.status===200){
                  return response;
               }else{
                  return $q.error;
               }
        });
    }
});