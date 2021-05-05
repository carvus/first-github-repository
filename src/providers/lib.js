/** created by a */


export function request (url,method,data){
    return new Promise((rslv,rjct)=>{
        let req = new XMLHttpRequest();
        req.open(method,url);

        req.onreadystatechange = function(){
            if(this.readyState === 4){
                if(this.status < 400){
                    rslv(JSON.parse(this.responseText));
                }else{
                    rjct(this.statusText);
                }
            }
        }
        if(data)
            req.send(data);
        else 
            req.send();
    });
}