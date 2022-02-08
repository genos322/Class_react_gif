
import React, { useState }  from "react";



export const AddCategory = ( {setCategories}) =>{

	const [inputValue, setInputValue] = useState("wenas");

	const hadleInputChange = (e)=>{
		setInputValue(e.target.value)
	}
	const hadleSubmit = (e)=>
	{
		e.preventDefault();
		if (inputValue.trim().length > 2)
		{
			console.log('submit hecho');
			setCategories(cats => [ ...cats,inputValue]);
		}
		setInputValue('')
	}


	return (
		<>
		<form onSubmit={ hadleSubmit}>
			<input type="text"
				value={inputValue}
				onChange={hadleInputChange }>
			
			</input>
		</form>
		</>
	);
};

