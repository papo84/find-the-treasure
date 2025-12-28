function Riddle1(RiddleNum,first,second,third,forth,fifth) {
if(RiddleNum==='Riddle1')
{
	if((document.getElementById(first).value==='ת')&&(document.getElementById(second).value==='ס')&&(document.getElementById(third).value==='פ')&&
		(document.getElementById(forth).value==='ר')&&(document.getElementById(fifth).value==='מ'))
	{
		window.location.replace('Riddle2.htm');	
	}
	else
	{
		alert('Wrong Answer!');
	};
}
}

function Riddle2(RiddleNum,first,second,third,forth,fifth,sixth,seventh) {
if(RiddleNum==='Riddle2')
{
	if((document.getElementById(first).value==='ט')&&(document.getElementById(second).value==='ל')&&(document.getElementById(third).value==='ו')&&
		(document.getElementById(forth).value==='י')&&(document.getElementById(fifth).value==='ז')&&(document.getElementById(sixth).value==='י')&&
		(document.getElementById(seventh).value==='ה'))
	{
		window.location.replace('Riddle3.htm');	
	}
	else
	{
		alert('Wrong Answer!');
	};
}
}

function Riddle3(RiddleNum,Answer) {
if(RiddleNum==='Riddle3')
{
	if(document.getElementById(Answer).value==='מכונת קפה')
	{
		window.location.replace('Riddle4.htm');	
	}
	else
	{
		alert('Wrong Answer!');
	};
}
}

function Riddle4(RiddleNum,first,second,third,forth) {
if(RiddleNum==='Riddle4')
{
	if((document.getElementById(first).value==='מ')&&(document.getElementById(second).value==='ק')&&(document.getElementById(third).value==='ר')&&(document.getElementById(forth).value==='ר'))
	{
		window.location.replace('Riddle5.htm');	
	}
	else
	{
		alert('Wrong Answer!');
	};
}
}

function Riddle5(RiddleNum,Answer) {
if(RiddleNum==='Riddle5')
{
	if(document.getElementById(Answer).value==='תנור')
	{
		window.location.replace('Youtube.htm');	
	}
	else
	{
		alert('Wrong Answer!');
	};
}
}

function ShowHint(divName) {
document.getElementById(divName).style.visibility = "visible";
}

function Close() {
	alert('Code:פשפשת');
	self.close();
}