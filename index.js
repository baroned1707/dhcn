console.log("Start Tools");
var button = document.getElementById("login");
// console.log(document.getElementById("auth_user").value); 
// const timeout = (ms, promise)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new Error("Timeout"))
//         },ms)
//         promise.then(resolve,reject)
//     });
// }

setInterval(async()=>{
    // timeout(500,fetch('https://yt3.ggpht.com/a/AGF-l79B7cVInP_vlIJdb-SO2kiB2ZU-Gn2M9-en=s900-c-k-c0xffffffff-no-rj-mo',{
    //     mode:'no-cors',
    //     method:'GET',
    //     cache:'no-cache',
    // }))
    // .then(()=>{
    //     console.log("Pass");
    // })
    // .catch(()=>{
    var temp = window.open('form.html','hide');
    temp.onpagehide();
    setTimeout(()=>{ 
        temp.close();
    }
    , 1000);
    // })
},1000)