// call back hell---------------------------------------
// promises---------------------------------------

function savedata(data){
 let netspeed = Math.floor(Math.random()*10+1);

  if(netspeed>5){
    console.log(`your data is saved:`, data ,`\n speed:${netspeed}`);
  }else{
    console.log(`your internet speed is very poor speed:${netspeed}`);
  }

};

savedata("subham,rahul");


// promises    then() , catch() ---------------------------------------

function savetodata (data){
    return new Promise ((resolve,reject ) => {
        let netspeed = Math.floor(Math.random()*10)+1;
        if(netspeed>5){
            resolve("succes : data was saved");
        } else{
            reject("failure : week connection ");
        }
    })

}

let request = savetodata("subham sahoo");
console.log(request);

request.then(()=>{
console.log("promises was resolve");

})

.catch(()=>{
    console.log("promise was reject")
})

// promises  improve verson ---------------------------------------

function savetodata (data){
    return new Promise ((resolve,reject ) => {
        let netspeed = Math.floor(Math.random()*10)+1;
        if(netspeed>5){
            resolve("succes : data was saved");
        } else{
            reject("failure : week connection ");
        }
    })

}

savetodata("subham sahoo")
.then(()=>{
console.log("data 1 is saved");
return savetodb("sanjay");
})
.then(()=>{
console.log("data 3 is saved");
 return savetodb("puja");
})
.then(()=>{
console.log("data 3 is saved");

})

.catch(()=>{
    console.log("promise was reject")
});


// change coller ---------------------------------------

let h1 = document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            h1.style.color= color;
            resolve("color was change");
        }, delay);
    });
}

changecolor("red",1000)
 .then(()=>{
    console.log("red color was complited");
    return changecolor("blue",1000);
 })
 .then(()=>{
    console.log(" blue color was complited");
    return changecolor("green",1000);
 })
  .then(()=>{
    console.log("green color was complited");
  
  })
