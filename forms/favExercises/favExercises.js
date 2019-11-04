var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]


favExercises.onshow=function(){
  selExercises.clear()
  for (i = 0; i <= exercises.length - 1, i++)
    selExercises.addItem(exercises[i])
    
}

selExercises.onfocusout=function(){
let finalMessage = "choose:"
for(i = 0; i <= selExercises.text.length - 1, i++)
  finalMessage1 = finalMessage + " " + selExercises.text[i]
  NSB.MsgBox(finalMessage1)
}



btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}



