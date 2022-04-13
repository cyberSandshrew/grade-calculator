//Programming Challenge
            //On Your Own:    ch. 3
            //Description:
			//Create an html website program that converts a student’s course average to a letter grade.
			//Save your page as grades.html and be sure to include an appropriate page title. 
			//The conversions are as follows:  Less than 60: F
                        
            //Created by: Jerry French  
						//csc240
            //Created on: 3/16/2022,
			
			//print total
 function Total(){
	var sub1 = parseInt(document.getElementById("quiz1").value);
	var sub2 = parseInt(document.getElementById("quiz2").value);
	var sub3 = parseInt(document.getElementById("quiz3").value);
	var sub4 = parseInt(document.getElementById("quiz4").value);
	var sub5 = parseInt(document.getElementById("quiz5").value);
  
 
	if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
	{
    alert("Please Enter Marks in range of 100");
	}
  
  
	else {
    var total= sub1 + sub2 + sub3 + sub4 + sub5;
    document.getElementById("total").innerHTML = "Quiz 1: "+sub1+"<br> Quiz 2: "+sub2+"<br> Quiz 3: "+sub3+"<br> Quiz 4: "+sub4+"<br> Quiz 5: "+sub5+"<br> Total Marks: "+total;  
	}
}
						//average
function Average(){
	var sub1 = parseInt(document.getElementById("quiz1").value);
	var sub2 = parseInt(document.getElementById("quiz2").value);
	var sub3 = parseInt(document.getElementById("quiz3").value);
	var sub4 = parseInt(document.getElementById("quiz4").value);
	var sub5 = parseInt(document.getElementById("quiz5").value);
    
	if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
	{
    alert("Please Enter Marks in range of 100");
	}
	else {
    var total= sub1 + sub2 + sub3 + sub4 + sub5;
    var avg=total/5;
    document.getElementById("avg").innerHTML="Your Average marks are: "+avg;
	}
}
						//grade mark
  
function Grade(){
	var sub1 = parseInt(document.getElementById("quiz1").value);
	var sub2 = parseInt(document.getElementById("quiz2").value);
	var sub3 = parseInt(document.getElementById("quiz3").value);
	var sub4 = parseInt(document.getElementById("quiz4").value);
	var sub5 = parseInt(document.getElementById("quiz5").value);
    
	if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
	{
    alert("Please Enter Marks in range of 100");
	}else {
     var total= sub1 + sub2 + sub3 + sub4 + sub5;
     var avg=total/5;
    
     if(avg>=89.6 )
     {
       document.getElementById("grade").innerHTML="You Got an A Grade";
     }
     
    
	 else if(avg>=79.6 && avg<=89.5)
     {
       document.getElementById("grade").innerHTML="You Got a B Grade";
     }
     
	 else if(avg>=69.6 && avg<=79.5)
     {
       document.getElementById("grade").innerHTML="You Got a C Grade";
     }
     
	 else if(avg>=60 && avg<=69.5)
     {
       document.getElementById("grade").innerHTML="You Got a D Grade";
     }
    
     else {
       document.getElementById("grade").innerHTML="You Got a F Grade";
     }
    
    
  }
 
 
}
 
