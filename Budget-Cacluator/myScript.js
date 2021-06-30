
  



function submit(){
  var income= $("#income").val();   
  

  if(income>=1){

    document.querySelector('.display').style.display="none";
    
        document.getElementById('content').style.display="none";
        document.querySelector('.main-content').style.display="block";
        var exp=0;
        var income= $("#income").val();                  //setting default value;
         $("#budget").text(income-0.2*income); 

         var budget= Number($("#budget").text());   //remember number cascading is important otherwise it there be problem in adding two input field valu as it consider the input field value as string by default so need to convert it into number
         $("#balance").text(budget-exp);
        $("#savings").text(income-exp);             

         

      document.getElementById('newsubmit').addEventListener('click',()=>
      { var newbudget=Number($("#newBudget").val());  
                if(newbudget<=income)
                   {
                    $('#budget').text(newbudget);
                    $("#balance").text(newbudget-0);
                    $("#savings").text(income-0);
                    $("#expenses").text(0);

                   } 
                   else{
                     window.alert("Budget can't be greater than your income");
                   }


      });
        document.getElementById('add-expenses').addEventListener('click',function(){
            var amt=Number(document.getElementById('amount').value);
            
            var budget= Number($("#budget").text());
            exp=exp+amt;
            window.localStorage.setItem('expense',exp);
            $("#expenses").text(exp);
            $("#balance").text(budget-exp);
            $("#savings").text(income-exp);


            var node =document.createElement('tr');
            var data1=document.createElement('td');
            var data2=document.createElement('td');
            var data3=document.createElement('td');
            var data4=document.createElement('td');
            var data5=document.createElement('button');

            data5.setAttribute('onclick','delete1()');
            data5.setAttribute('class','delete1');
            data5.type = "submit";

            data5.addEventListener("click", function () {
                var list = document.getElementById("tbody");
                list.removeChild(node);

                exp=exp-amt;
                window.localStorage.setItem('exp',exp);
                var budget= Number($("#budget").text());
                $("#expenses").text(exp);
                $("#balance").text(budget-exp);
                $("#savings").text(income-exp);

              });
        
            data5.innerText="Delete";
            data1.innerText=document.getElementById('budget-description').value;
            data2.innerText=document.getElementById('category').value;
            data3.innerText=document.getElementById('amount').value;
            data4.innerText=document.getElementById('curdate').value;
            node.appendChild(data1);
            node.appendChild(data2);
            node.appendChild(data3);
            node.appendChild(data4);
            node.appendChild(data5);
            document.getElementById('tbody').appendChild(node);
            
            
            


        });
        
        // document.getElementById('deletefromtop').addEventListener('click',function(){

        //     var node = document.getElementById("tbody");
        //     node.removeChild(node.childNodes[0]);

        //         $("#expenses").text(exp);
        //         $("#balance").text(budget-exp);
        //         $("#savings").text(income-exp);
        // });
        

        // document.getElementById('deletefrombottom').addEventListener('click',function() {
        //     var list = document.getElementById("tbody");
        //     list.removeChild(list.lastChild);
        //   });
        
        
       
        
        document.getElementById('toggledisplay').addEventListener('click',function() {

            
                $(".display").toggle();
              });

              document.getElementById('clearall').addEventListener('click',function(){
                
                $("#budget").text(income-0.2*income); 
                $("#savings").text(income); 
                $("#balance").text(income-0.2*income); 
                $("#expenses").text(0); 
                $("#newBudget").text(null); 
                var table = document.getElementById('tbody');
                var rowCount = table.rows.length;
            
                for (var i = 0; i < rowCount; i++) 
                {
            
                    table.deleteRow(i);
                     i--;
                    
                }
                
        
                     
                
                
            });
                                      
              
             

}
else
{
  alert("Please Enter any value positive to move forward\n Thank you....");
}
}

