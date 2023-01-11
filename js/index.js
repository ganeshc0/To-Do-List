var taskName = document.querySelector("#taskName");
var taskList = document.querySelector("#taskList");
count=0;
document.querySelector('#addTask').addEventListener('click',function()
{

if(taskName.value == "")
{
 alert("plz enter the task");
}
else
{
  count++;
  taskList.innerHTML+= '<div class="task" id="task'+count+'"> <input type="checkbox" class="check" id="check'+count+'" onchange="changeStatus('+count+')"> <span id="text'+count+'">'+taskName.value+'</span> <input type="button" onclick="removeDiv('+count+')" value="x"></div><br>';
  taskName.value ="";
}
});

function changeStatus(id)
{ 
  
   var status =document.getElementById("check"+id).checked
   if(status)
   {
    document.getElementById("text"+id).style.textDecoration='line-through';
   }
   else
   {
    document.getElementById("text"+id).style.textDecoration='none';
   }
  //  var status =document.getElementById("check"+id).checked;
  //  var taskTitle = document.getElementById("text"+id);
  //  taskTitle.style.textDecoration = status ? 'line-through' : 'none';

 }

function removeDiv(id)
{
  
  var flag = confirm("Are you want to delete this task ? ");
    flag ? document.getElementById("task"+id).remove(): " ";
}
document.querySelector('#sub').addEventListener('click',function(){

 document.querySelector('#demo').innerHTML="";
})