let id;


let cont=document.querySelector("#container")

async function SearchStars(x){

    try{
       
    let url=`https://swapi.dev/api/people/?search=${x}`
        

        let res=await fetch(url)

        let data=await res.json()

        console.log(data)
        return data.results;
        
    }catch(error){
        console.log("error :",error)
    }
}
function appendSearch(star){          
     
    cont.innerHTML=null;
    if(star===undefined)
    {
        return false;
    }
    star.forEach(function(el){
        let p=document.createElement("p");
        p.innerText=el.name
        p.style.color="yellow";
        p.style.cursor="pointer"

        cont.append(p);   
            cont.style.display="block";                  //append ko pss main fuctn me krnge

            p.addEventListener("mouseover",function(){
                p.setAttribute("id","mouse")
            })

            p.addEventListener("click",function(){
                nextPage(el)
            })
   
            let p1=document.createElement("p");
            p1.innerText=el.birth_year;
            p1.style.color="gray";
            p1.style.fontSize="11px"

            cont.append(p1)
        });
}
function nextPage(el){


    window.location.href ="next.html";
    localStorage.setItem("nextdtl",JSON.stringify(el))

}

async function main(){

    let x=document.querySelector("#query").value;

    let response= SearchStars(x)

    let data=await response;

       appendSearch(data)       //49 wala date isme pass hnga value as a
    console.log("data",data)
}


function debounceFunction(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func()
    },delay)
}