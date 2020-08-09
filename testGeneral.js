const a={
    c:{
        name:"Blake",
        age:30,
        d:{
            name:"jake",
            age:5
        }
    },
    name:"pb",
    age:26,
    marks:[{
        x:10,
        y:20,
        z:30}],
    scores:[11,12],
    g:undefined
    
}
const b={
    c:{
        name:"Blake",
        age:30,
        d:{
            name:"jake",
            age:5
        }
    },
    name:"pb",
    age:26,
    g:NaN,
    marks:[{
        x:10,
        y:20,
        z:30}],
    scores:[11,12]
}

function isEqual(a,b){
    let flag;
    var aProps=Object.keys(a);
    var bProps=Object.keys(b);
    if(aProps.length != bProps.length){
        flag=false;
        return flag;
    }
    Object.keys(a).forEach(item=>{
        if(flag==false){
            console.log("abort");
            return flag;
        }
        if(!b.hasOwnProperty(item)){
            flag=false;
        }
        else{
            if(typeof(a[item])=="object"){
                flag=isEqual(a[item],b[item]);
            }
            else if(a[item]===b[item]){
                flag=true
            }
            else{
                flag=false;
            }
            
        }
        
    })
    return flag;
}

