var Input_Cnt=0;
function Ternimal_Input(event){
	var Focus_ele=document.activeElement.className;
	console.log(Focus_ele);
	console.log(event);
	var Text=document.querySelector(".Ter_Input").clientWidth;
	console.log(Text);

	var Is_Typing=(Focus_ele == "Ter_Input");
	if(Is_Typing ){
		if( (event.code== 'Backspace' ) ){
			if(Input_Cnt>0){
				Input_Cnt=Input_Cnt-1;
				document.querySelector(".Blink").style.transform= "translateX("+(Input_Cnt*12).toString()+"px)";
			}
			
		}
		else{
			Input_Cnt=Input_Cnt+1;
			document.querySelector(".Blink").style.transform= "translateX("+(Input_Cnt*12).toString()+"px)";
		}
	}
}


window.addEventListener('keydown',Ternimal_Input);