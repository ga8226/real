$(document).ready(function(){
    let naviDB = [
        ["nav-item","nav-link","#services","이용안내"]
        ,["nav-item","nav-link","#portfolio","메뉴"]
        ,["nav-item","nav-link","#team","내 몸의소리"]
        ,["nav-item","nav-link","##contact","창업안내"]
    ];
    let naviTag = ``;
    for(x in naviDB){
        naviTag += `<li class=${naviDB[x][0]}>
        <a href=${naviDB[x][2]}  class=${naviDB[x][1]} >
        ${naviDB[x][3]}
        </a>
        </li>`
    }
    $(".navbar-nav").html(naviTag)
   
})


