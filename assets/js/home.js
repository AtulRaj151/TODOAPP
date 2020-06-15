const descInput = document.getElementById('desc-input');
const category = document.getElementById('category');
const dueDate = document.getElementById('due-date');
const taskContainer = document.getElementById('tasks-container');

 function handleEvent(e){


    console.log(e.target);
         
            if(e.target.id == 'desc-input'){

                descInput.parentElement.classList = 'active';
                descInput.classList = 'active'
                Unhighlight(category);
                Unhighlight(dueDate);

            }else if(e.target.id == 'category'){


                category.parentElement.classList = 'active';
                category.classList = 'active';
                Unhighlight(dueDate);
                Unhighlight(descInput);

            }else if(e.target.id == 'due-date'){

                dueDate.parentElement.classList = 'active';
                dueDate.classList = 'active'
                Unhighlight(descInput);
                Unhighlight(category);
            }else{
                 
                Unhighlight(descInput);
                Unhighlight(category);
                Unhighlight(dueDate);
            }
         
 }
function Unhighlight(element){

        
        element.parentElement.classList.remove('active');
        element.classList.remove('active');

}
window.addEventListener('click',handleEvent);


// function  ajaxCheck(){

//     $('input[type="checkbox"]').change(function(e){
  
//            e.preventDefault();
//           let  para  = $(this).parent().attr('href');

//             $.ajax({
//                 type:'post',
//                 url: para,
//                 success: function(result){
//                       console.log(result);
//                 },error:function(err){
//                     console.log(err);
//                 }
                

//             })

//     });
// }
// ajaxCheck();



