//slides per view

function right(evt, scrollright){
    var listcollection, rightside;

    listcollection = document.getElementsByClassName('listcollection')

    rightside = document.getElementsByClassName('right')

    document.getElementById(scrollright).scrollLeft += 350;
}

function left (evt, scrollleft){
    var listcollection, scrollleftside;

    listcollection = document.getElementsByClassName('listcollection')

    scrollleftside = document.getElementsByClassName('left')

    document.getElementById(scrollleft).scrollLeft -= 350;
}

//tabs
const api ="data.json";

var container2 = document.querySelector('.furnituretab');

function getfoods(url){

fetch(url).then(res => res.json()).then(data => {
    container2.innerHTML = "";

    if(data.furniture){
        data.furniture.forEach(item => {

            const images = [];

            for(let i=1; i<=10; i++){
                if(item.furnitureimg['images' + i]){
                    images.push(`${item.furnitureimg['images'+ i]}`)
                }else{
                    break;
                }
            }

        var card = `

        <div class="tab-pane py-5 ${item.title} fade show ${item.class}" id="pills-${item.title}" role="tabpanel" aria-labelledby="pills-${item.title}-tab">
        <div class="tab-grid">
        ${images.map((ing) => `<img src="${ing}">`).join('')}
        </div>
        </div>
        `
        
        container2.innerHTML += card;
        })
        }
        })
        }
        getfoods(api)