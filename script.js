var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
container.append(row);


var res=fetch("https://api.gameofthronesquotes.xyz/v1/characters");
res.then((data)=>data.json()).then((data1)=>foo(data1));
    function foo(data1){
          for(i=0;i<data1.length;i++){
              row.innerHTML+= `<div class="col-md-4">
                               <div class="card mb-3" style="max-width: 18rem;">
                                 <div class="card-body text-danger">
                                  <h2 class="card-title"><strong>Name : ${data1[i].name}</strong></h2>
                               <p class="card-text">Slug : ${data1[i].slug}</p>
                               <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                        </div>`;
      document.body.append(container);
          }
}