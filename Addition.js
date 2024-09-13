import {useState,useRef} from "react";

function Addition()
{
	const rNum1=useRef();
	const rNum2=useRef();
	
	const [num1,setNum1]=useState("");
	const [num2,setNum2]=useState("");
	const [msg,setMsg]=useState("");
	
	const hNum1=(event)=>{setNum1(event.target.value);}
	const hNum2=(event)=>{setNum2(event.target.value);}

	const find=(event)=>{
	event.preventDefault();
	
	if (num1===""){
	alert("please enter first number");
	setMsg("");
	rNum1.current.focus();
	return;
	}

	if(num2==="")
	{
		alert("please enter second number");
		setMsg("");
		rNum2.current.focus();
		return;
	}
	let n1=parseFloat(num1);
	let n2=parseFloat(num2);

	let r=n1+n2;
	let a="addition="+r.toFixed(2);
	setMsg(a);
	}

	return(
	<>
	<center>
		<h1>Addition App </h1>
		<form onSubmit={find}>
			<input type="number" step="any" placeholder="enter first number" ref={rNum1} onChange={hNum1}/>
			<br/><br/>
			<input type="number" step="any" placeholder="enter second number" ref={rNum2} onChange={hNum2}/>
			<br/><br/>
			<input type="submit" value="Add"/>
		</form>
		<h2> {msg} </h2>
	</center>
	</>
	);
}
export default Addition;