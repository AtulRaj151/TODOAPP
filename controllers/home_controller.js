const Tasks = require('../models/tasks');
const randomColor = require('randomcolor');

module.exports.home = function(req,res){
    

   let task =   Tasks.find({},function(err,task){
           if(err){ console.log('error',err); return; }           
                 return res.render('home',{
                  title:'toDoList',
                  tasks:task
                  
                 });
   });
}

module.exports.createTask =  function(req,res) { 

      console.log(req.body);

         let date = req.body.date;

         if(req.body.date === ''){
              date = "NoDeadLine";
         }
         const color  = randomColor();

       Tasks.create({
           description: req.body.description,
           category:req.body.category,
           done:'unchecked',
           date:date,
           color:color
           


       },function(err,tasks){

          if(err){ console.log('error',err); return;}
          console.log('added to the database')

          return res.redirect('back');

      })


             
}

module.exports.checkTask = async function(req,res){

           let task  =  await Tasks.findById(req.params.id);
          // console.log(task);
           
                
               // if(err) { console.log('Error in finding the element',err); return;}

                if(task){

                       if(task.done === 'unchecked'){

                        let task1 =  await Tasks.findByIdAndUpdate(req.params.id,{done:'checked'});
                             
                         //  console.log("task1 ==== ",task1,req.params.id);

                         
                               
                    

                       }else if(task.done === 'checked'){

                         let task2 = await Tasks.findByIdAndUpdate(req.params.id,{$set: {done:'unchecked'}});
                         // console.log("++++ task2  == ",task2,req.params.id);  
                     

                       }
                        return res.redirect('back');
                }else{
                     console.log("task not found")
                }

          
}


module.exports.deleteTask =  async function(req,res){

        let task  = await Tasks.deleteMany({done:'checked'});

         console.log(task);

         return res.redirect('back');
          
}