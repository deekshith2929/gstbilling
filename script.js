function add(){
    var first,second,third;
    var gstvalue;
    var gstvalue=parseInt(document.getElementById("gstid").value);
    localStorage.setItem("gstvaluelocal",gstvalue);
    var first=parseInt(document.getElementById("firstcost").value);
    if(isNaN(first)) first=0;
    if(gstvalue===0)
    first=first*(100/100);
    else if(gstvalue===5)
    first=first*(100/105);
    else if(gstvalue===12)
    first=first*(100/112);
    else if(gstvalue===18)
    first=first*(100/118);
    else if(gstvalue===28)
    first=first*(100/128);
    var temp1=first;
    first=temp1.toFixed();
    localStorage.setItem("firstitemcost",first);  
    var firstcount=parseInt(document.getElementById("productscount1").value);
    if(isNaN(firstcount)) firstcount=0;
    localStorage.setItem("firstitemcount",firstcount);
    var first=(first*firstcount);
    if(isNaN(first)) first=0;
    localStorage.setItem("firstcostlocal",first);
    var second=parseInt(document.getElementById("secondcost").value);
    if(isNaN(second)) second=0;
    if(gstvalue===0)
    second=second*(100/100);
    else if(gstvalue===5)
    second=second*(100/105);
    else if(gstvalue===12)
    second=second*(100/112);
    else if(gstvalue===18)
    second=second*(100/118);
    else if(gstvalue===28)
    second=second*(100/128);
    var temp2=second;
    second=temp2.toFixed();
    localStorage.setItem("seconditemcost",second);
    var secondcount=parseInt(document.getElementById("productscount2").value);
    if(isNaN(secondcount)) secondcount=0;
    localStorage.setItem("seconditemcount",secondcount);
    var second=(second*secondcount);
    if(isNaN(second)) second=0;
    localStorage.setItem("secondcostlocal",second);
    var third=parseInt(document.getElementById("thirdcost").value);
    if(isNaN(third)) third=0;
    if(gstvalue===0)
    third=third*(100/100);
    else if(gstvalue===5)
    third=third*(100/105);
    else if(gstvalue===12)
    third=third*(100/112);
    else if(gstvalue===18)
    third=third*(100/118);
    else if(gstvalue===28)
    third=third*(100/128);
    var temp3=third;
    third=temp3.toFixed();
    localStorage.setItem("thirditemcost",third);
    var thirdcount=parseInt(document.getElementById("productscount3").value);
    if(isNaN(thirdcount)) thirdcount=0;
    localStorage.setItem("thirditemcount",thirdcount); 
    var third=third*thirdcount;
     if(isNaN(third)) third=0;
    localStorage.setItem("thirdcostlocal",third);

     var otherz=parseInt(document.getElementById("othercost").value);
     if(isNaN(otherz)) otherz=0;
     if(gstvalue===0)
     otherz=otherz*(100/100);
     else if(gstvalue===5)
     otherz=otherz*(100/105);
     else if(gstvalue===12)
     otherz=otherz*(100/112);
     else if(gstvalue===18)
     otherz=otherz*(100/118);
     else if(gstvalue===28)
     otherz=otherz*(100/128);
     var temp4=otherz;
     otherz=temp4.toFixed();
     localStorage.setItem("otherzcostlocal",otherz);
     var otherzcount=parseInt(document.getElementById("othercount").value);
     if(isNaN(otherzcount)) otherzcount=0;
     localStorage.setItem("otheritemcount",otherzcount);
     var otherz=otherz*otherzcount;
     if(isNaN(otherz)) otherz=0;
     localStorage.setItem("othercostlocal",otherz);
    var total=first+second+third+otherz;
    localStorage.setItem("totallocal",total);
    var gst=total*(gstvalue/100);
    var cgst=gst/2;
    var cgst=cgst.toFixed();
    localStorage.setItem("cgstlocal",cgst);
    var sgst=gst/2;
    var sgst=sgst.toFixed();
    localStorage.setItem("sgstlocal",sgst);
    var finalprice=gst+total;
    finalprice=finalprice.toFixed();
    localStorage.setItem("finalpricelocal",finalprice);
    var itemname1=parseInt(document.getElementById("products1").value);
   localStorage.setItem("firstitemname",itemname1);
   var itemname2=parseInt(document.getElementById("products2").value);
   localStorage.setItem("seconditemname",itemname2);
   var itemname3=parseInt(document.getElementById("products3").value);
   localStorage.setItem("thirditemname",itemname3);
   var othername=document.getElementById("other").value;
   localStorage.setItem("otheritemname",othername);

 
   }

