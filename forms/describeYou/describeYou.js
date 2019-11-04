

rdoPersonType.onclick=function(){
  if (rdoPersonType.value == 0)  
      NSB.MsgBox("I would agree that you are a 'Optimistic' person too!",0,"Person Type")
  else if (rdoPersonType.value == 1) 
      NSB.MsgBox("I would agree that you are a 'Pessimistic' person too!",0,"Person Type")    
  else if (rdoPersonType.value == 2)  
      NSB.MsgBox("I would agree that you are a 'Trusting' person too!",0,"Person Type")    
  else if (rdoPersonType.value == 3)  
      NSB.MsgBox("I would agree that you are a 'Envious' person too!",0,"Person Type")    
  
}

btnFavExercise.onclick=function(){
  ChangeForm(favExercises)
}





