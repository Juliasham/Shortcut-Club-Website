function clubsel(val) {
  	var inp = val.toUpperCase();
	var mnth = document.getElementById("month").value;

  	 var table = document.getElementById("myTable");

    var tr = table.getElementsByTagName('tr');

    	for (var i = 0; i < tr.length; i++) {
    	var td = tr[i].getElementsByTagName("td")[0];
    	var td_mn = tr[i].getElementsByTagName("td")[3].innerHTML;
    	var lcl_mn = td_mn.split("/");

    	if (td)   {
    	    if ((val == "Clubs" &&  mnth != "0") && (lcl_mn[1] == mnth)){
    	    	/*alert ("Inside first if")*/
		    	tr[i].style.display = "";
		      	} 

		      	else if((val != "Clubs" &&  mnth == "0") && (td.innerHTML.toUpperCase() == inp)) {
			    	tr[i].style.display = "";


		      	}



		      	else if ((val != "Clubs" &&  mnth != "0") && (lcl_mn[1] == mnth && td.innerHTML.toUpperCase() == inp)){
    	    	/*alert ("Inside Second if")*/
		    	tr[i].style.display = "";
		      	
		      	} 
		      	else if(val == "Clubs" && mnth == "0"){
		      		/*alert ("Default values in clunsel");*/
		      	 tr[i].style.display = "";

		      	}

		      	else
		      	{
		      		/*alert ("Inside else");*/

		        tr[i].style.display = "none";
		      	}

    	    }
    
    	/*if (td)   {
    	    
      	if (((td.innerHTML.toUpperCase() == inp) && (lcl_mn[1] == mnth))  || (val == "Clubs" || val == "0")) {
        tr[i].style.display = "";
      	} else {
        tr[i].style.display = "none";
      	}*/

      
    }      
  }

  



function monthsel(mnth) {
	var val = document.getElementById("club").value;
	var inp = val.toUpperCase();

  	 var table = document.getElementById("myTable");

    var tr = table.getElementsByTagName('tr');

    	for (var i = 0; i < tr.length; i++) {
    	var td = tr[i].getElementsByTagName("td")[0];
    	var td_mn = tr[i].getElementsByTagName("td")[3].innerHTML;
    	var lcl_mn = td_mn.split("/");

    	/*alert ("td.innerHTML.toUpperCase()"+td.innerHTML.toUpperCase());
    	alert ("inp"+inp);
    	alert ("lcl_mn[1]"+lcl_mn[1]);
    	alert ("tmnth"+mnth);
    	alert ("val"+val);*/


    	if (td)   {
    	    if ((val == "Clubs" &&  mnth != "0") && (lcl_mn[1] == mnth)){
    	    	/*alert ("Inside first if")*/
		    	tr[i].style.display = "";
		      	} 
				else if((val != "Clubs" &&  mnth == "0") && (td.innerHTML.toUpperCase() == inp)) {
			    	tr[i].style.display = "";


		      	}


		      	else if ((val != "Clubs" &&  mnth != "0") && (lcl_mn[1] == mnth && td.innerHTML.toUpperCase() == inp)){
    	    	/*alert ("Inside Second if")*/
		    	tr[i].style.display = "";
		      	
		      	} 
		      	else if(val == "Clubs" && mnth == "0"){
		      		/*alert ("Default values in monthsel");*/
		      	 tr[i].style.display = "";

		      	}

		      	else
		      	{
		      		/*alert ("Inside else");*/

		        tr[i].style.display = "none";
		      	}

    	    }
      	/*if (((td.innerHTML.toUpperCase() == inp) && (lcl_mn[1] == mnth))  || (val == "Clubs") || (mnth == "0")) {
        tr[i].style.display = "";
      	} else {
        tr[i].style.display = "none";
      	}
		*/
      
    }      
  }
  


function myFunction(){
	var mnth = document.getElementById("month").value;
	var d = new Date();
	var curmnth = d.getMonth()+1;
		if(curmnth < 10){
			curmnth = "0" + curmnth;

		}

	document.getElementById("month").value = curmnth;

 

}