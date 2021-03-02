import React, { useState } from 'react'

const Alert = ({ handleAlertMessage, alertMessage }) => {

		const [messagevalue, setMessagevalue] = useState(alertMessage);

		const handleInputChange = (event) => {
			setMessagevalue(event.target.value)
		}

		const handleEvent = () => {
			handleAlertMessage({messagevalue});
		}
	return (
		<>
			<form action="">
				<label htmlFor="inputString">Your data goes here ⬇️ &#58;</label>
				<input 
					type="text"
					id="message"
					name="message"
					placeholder="Write something here and i'll send it as an alert when you push the button"
					value={messagevalue}
					onChange={handleInputChange}
					onMouseLeave={handleEvent}
					onBlur={handleEvent}
				/>
			</form>
		</>
	);
};

export default Alert;