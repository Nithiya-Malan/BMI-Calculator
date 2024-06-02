import React, { useState } from 'react'; 
import './App.css'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function BmiCalculator() { 
	const [heightValue, setHeightValue] = useState(''); 
	const [weightValue, setWeightValue] = useState(''); 
	const [bmiValue, setBmiValue] = useState(''); 
	const [bmiMessage, setBmiMessage] = useState(''); 

	const calculateBmi = () => { 
		if (heightValue && weightValue) { 
			const heightInMeters = heightValue / 100; 
			const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2); 
			setBmiValue(bmi); 

			let message = ''; 
			if (bmi < 18.5) { 
				message = 'You are Underweight'; 
			} else if (bmi >= 18.5 && bmi < 25) { 
				message = 'You are Normal weight'; 
			} else if (bmi >= 25 && bmi < 30) { 
				message = 'You are Overweight'; 
			} else { 
				message = 'You are Obese'; 
			} 
			setBmiMessage(message); 
		} else { 
			setBmiValue(''); 
			setBmiMessage(''); 
		} 
	}; 

	return ( 
		<div className="container" align="center"> 
			<h1>BMI Calculator</h1> 
			<div className="input-container"> 
			<TextField id="outlined-basic" variant="outlined" label="Enter Your Height (cm):" value={heightValue} onChange={(e) => setHeightValue(e.target.value)}/>
			</div> 
      <br/>
			<div className="input-container"> 
			<TextField id="outlined-basic" variant="outlined" label="Enter Your Weight (kg):" value={weightValue} onChange={(e) => setWeightValue(e.target.value)} />
			</div> 
      <br/>
      <Button variant="contained" onClick={calculateBmi}>Calculate BMI</Button>
      <br/>
			{bmiValue && bmiMessage && ( 
				<div className="result"> 
					<p> 
						Your BMI: <span className="bmi-value">{bmiValue}</span> 
					</p> 
					<p> 
						Result: <span className="bmi-message">{bmiMessage}</span> 
					</p> 
				</div> 
			)} 
		</div> 
	); 
} 

export default BmiCalculator;
