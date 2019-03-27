import React, { useState, useEffect } from "react";
import cls from "./Arrays.module.css";
import { Alert, Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container } from "reactstrap";

const Arrays = () => {
	const getNewArray = () => {
		let randomIndex = Math.floor(Math.random() * 100 + 1);
		let newArray = [];
		for (let i = 1; i <= 100; i++) {
			if (i !== randomIndex) {
				newArray.push(i);
			}
		}
		setMissingIntArray(newArray);
	};
	const [missingIntArray, setMissingIntArray] = useState([]);
	useEffect(() => {
		getNewArray();
	}, []);

	const missingIntDisp = missingIntArray.map((num, i) => {
		return (
			<div key={i} style={{ display: "inline-block" }}>
				{num},
			</div>
		);
	});
	const findMissingInt = array => {
		for (let i = 0; i < array.length; i++) {
			if (array[i] !== i + 1) {
				return i + 1;
			}
		}
	};

	const missingInt = findMissingInt(missingIntArray);

	return (
		<div className={cls.ArraysSection}>
			<h1>Arrays</h1>
			<h2 className={cls.subsectionHeading}>
				How do you find the missing number in a given integer array of 1 to 100?
			</h2>
			<Card>
				<CardBody>
					<CardTitle>My initial thoughts:</CardTitle>
					<CardText>
						I would first like to confirm that the list is in order.
					</CardText>
					<CardText>
						If it's in order, then I would have a counter that will
						increase by 1 each time and check to see if it is equal to the
						currently indexed position.
					</CardText>

					<CardSubtitle>
						<strong>Array to check:</strong>
					</CardSubtitle>
					<div>{missingIntDisp}</div>
					<Button color="dark" className={cls.button} onClick={getNewArray}>
						Make a new missing integer!
					</Button>
				</CardBody>
				<Container style={{ width: "50%", textAlign: "center", marginLeft: "5px" }}>
					<Alert color="success">
						The missing int is:
						<p>
							<strong>{missingInt}</strong>
						</p>
					</Alert>
				</Container>
			</Card>
		</div>
	);
};

export default Arrays;
