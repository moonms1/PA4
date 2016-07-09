$(document).ready(function() 
{    $("#results").click(function() {                

if (!$("input[@name=q1]:checked").val() ||            
!$("input[@name=q2]:checked").val()                    
) {            
alert("You're not done yet!");        
}        

else {            
var cat1name = "1";            
var cat2name = "2";                       
var cat3name = "None";            
            

var cat1 = ($("input[@name=q1]:checked").val() != "a"); 
           
var cat2 = ($("input[@name=q2]:checked").val() != "b");  
 
var cat3 = (!cat1 && !cat2); var categories = [];                        

if (cat1) { categories.push(cat1name) };            
if (cat2) { categories.push(cat2name) };                                  

var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
$("#categorylist").text(catStr);                        
$("#categorylist").show("slow");            

if (cat1) { $("#category1").show("slow"); };            
if (cat2) { $("#category2").show("slow"); };            
{ $("#closing").show("slow"); };
}
    });});
