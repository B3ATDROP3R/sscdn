$(document).ready(function(){var list,i,switching,b,shouldSwitch;list=document.getElementById("myUL");switching=true;while(switching){switching=false;b=list.getElementsByTagName("LI");for(i=0;i<b.length-1;i++){shouldSwitch=false;if(b[i].innerHTML.toLowerCase()>b[i+1].innerHTML.toLowerCase()){shouldSwitch=true;break}}if(shouldSwitch){b[i].parentNode.insertBefore(b[i+1],b[i]);switching=true}}});function search(){var input,filter,ul,li,a,i,txtValue;input=document.getElementById("myInput");filter=input.value.toUpperCase();ul=document.getElementById("myUL");li=ul.getElementsByTagName("li");for(i=0;i<li.length;i++){a=li[i].getElementsByTagName("a")[0];txtValue=a.textContent||a.innerText;if(txtValue.toUpperCase().indexOf(filter)>-1){li[i].style.display=""}else{li[i].style.display="none"}}}function newSrc(){var ns="value";document.getElementById("MyFrame").src=ns}