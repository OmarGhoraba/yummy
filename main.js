
let Meals =[]
async function GetApi(){
    var Url =await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    let res = await Url.json();
    Meals = res.meals;
    CataDisplay()
    AreaDisplay()
    IngrDisplay()
}
GetApi()
// =============== load

$(document).ready(function(){
    $('#loading').fadeOut(500)
}

)

//  ============== side bar =============

$('.tap').click(function(){
if($('.SideBar').css('left') == '-220px')
    $('.SideBar').animate({left:0})

else
    $('.SideBar').animate({left:'-220px'})
}) 

// ============= Search area ==========
$('.SideBar .Search').click(function(){
    $('.SearchArea').css("display" , "block")
    $('.Contact').css("display","none")
    $('.Area2').css("display","none")
    $('.Ingre').css("display","none")
    $('.Cate').css("display","none")
    $('.SideBar').animate({left:'-220px'})
    
})
// ====================Contact us =================
$('.SideBar .Cont').click(function(){
    $('.Contact').css("display","block")
    $('.SearchArea').css("display" , "none")
    $('.Cate').css("display","none")
    $('.Area2').css("display","none")
    $('.Ingre').css("display","none")
    $('.SideBar').animate({left:'-220px'})
})

// ====================catagory =================
$('.SideBar .Cat').click(function(){
    $('.Cate').css("display","block")
    $('.SearchArea').css("display" , "none")
    $('.Contact').css("display","none")
    $('.Ingre').css("display","none")
    $('.SideBar').animate({left:'-220px'})
})

function CataDisplay(){
    let MealsDisplay ='';

    for(var i= 0; i<Meals.length; i++)
    {
     MealsDisplay+=`
        <div class="item col-md-3 position-relative ">
        <img src="${Meals[i].strMealThumb}" alt="" class="w-100 p-2 ">
        <div class="overlay bg-light position-absolute ">
        <h2 class="opacity-100 m-2 fw-bolder">${Meals[i].strMeal}</h2>
        </div>
       </div>`
    }
    Row.innerHTML = MealsDisplay
}

// ====================Area =================
$('.SideBar .Area').click(function(){
    $('.Area2').css("display","block")
    $('.SearchArea').css("display" , "none")
    $('.Contact').css("display","none")
    $('.Cate').css("display","none")
    $('.Ingre').css("display","none")
    $('.SideBar').animate({left:'-220px'})
})

function AreaDisplay(){
    let AreaDisplay ='';

    for(var i= 0; i<Meals.length; i++)
    {
     AreaDisplay+=`
        <div class="item col-md-3 P-3 fs-1 text-center text-light bolder">
        <i class="fa-solid fa-house-laptop"></i>
    <p>${Meals[i].strArea}</p>
       </div>
    </div>`
    }
    Area.innerHTML = AreaDisplay
}

// ====================ingr =================
$('.SideBar .Ingr').click(function(){
    $('.Ingre').css("display","block")
    $('.Area2').css("display","none")
    $('.SearchArea').css("display" , "none")
    $('.Contact').css("display","none")
    $('.Cate').css("display","none")
    $('.SideBar').animate({left:'-220px'})
})

function IngrDisplay(){
    let IngrDisplay ='';

    for(var i= 0; i<Meals.length; i++)
    {
     IngrDisplay+=`
        <div class="item col-md-3 P-3 fs-1 text-center text-light bolder">
        <i class="fa-solid fa-drumstick-bite"></i>
    <h1>${Meals[i].strMeal}</h1>
    <span class ="fs-5">${Meals[i].strIngredient1},</span> 
    <span class ="fs-5">${Meals[i].strIngredient2}</span> 
       </div>
    </div>`
    }
   Ingr2.innerHTML = IngrDisplay
}



