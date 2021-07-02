// function getImagesOld(pageNumber,elNumber){
//     const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=${elNumber}`); //ajax возвращает promise;
//     return promise;
// }

function getImages(pageNumber,elNumber){
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=${elNumber}`); //ajax возвращает promise;
    return promise.then((responce)=>{
        return responce.data;
    });
}

function getTasks(){
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetid=123`); //ajax возвращает promise;
    return promise.then((responce)=>{
        return responce.data;
    });
}
function createTask(title){
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`,{
        widgetid:123,
        title:title
    }); //ajax возвращает promise;
    return promise.then((responce)=>{
        return responce.data;
    });
}
function updateTask(taskId,title){
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks`,{
        widgetid:123,
        taskId:taskId,
        title:title
    }); //ajax возвращает promise;
    return promise.then((responce)=>{
        return responce.data;
    });
}
function deleteTask(taskId){
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetid=123&taskId=${taskId}`); //ajax возвращает promise;
    return promise.then((responce)=>{
        return responce.data;
    });
}