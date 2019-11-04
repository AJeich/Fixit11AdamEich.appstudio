let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

btnNextPage.onclick=function(){
  ChangeForm(dessertVoting)
  
}

lstFavFoods.onclick=function(choice){
if (typeof(choice) == "object")
return

 let answer =  NSB.$(lstFavFoods + choice).textContent
  NSB.Box(" You picked" + answer + "-that is a great choice")
}



