/** created by a */


export function request (url,method,data){
    return new Promise(async (rslv,rjct)=>{
       const req = await fetch(url,{method,data})
       rslv( await req.json() );
       rjct(err=>err);
    });
}