import React, { useState, useEffect } from "react";
import cls from "./Arrays.module.css";
import {
  Container,
  Alert,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const MissingInt = () => {
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
  const findMissingIntText = `
	const findMissingInt = array => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== i + 1) {
        return i + 1;
      }
    }
	};
	`;

  const missingInt = findMissingInt(missingIntArray);

  return (
    <Container className={cls.ArraysSection}>
      <h4 className={cls.subsectionHeading}>
        How do you find the missing number in a given integer array of 1 to 100?
      </h4>
      <Card>
        <CardBody>
          <CardTitle>
            <strong>My initial thoughts:</strong>
          </CardTitle>
          <CardText>
            I would first like to confirm that the list is in order.
          </CardText>
          <CardText>
            If it's in order, then{" "}
            <strike>
              I would have a counter that will increase by 1 each time and check
              to see if it is equal to the currently indexed position.
            </strike>
            After starting on the findMissingInt() method, I changed to just
            using the index value as a reference. Iterate through the array and
            compare the int at each index value to the index value + 1. Then
            return the index + 1 when the values aren't equal.
          </CardText>

          <CardSubtitle>
            <strong>Array to check:</strong>
          </CardSubtitle>
          <div>{missingIntDisp}</div>
          <div className={cls.buttonContainer}>
            <Button
              color="dark"
              size="sm"
              className={cls.button}
              onClick={getNewArray}
            >
              Make a new missing integer!
            </Button>
            <Alert color="success" className={cls.Alert}>
              The missing int is:
              <p>
                <strong>{missingInt}</strong>
              </p>
            </Alert>
          </div>
        </CardBody>
        <h3 style={{ marginLeft: "15px" }}>
          <strong>Function</strong>
        </h3>
        <div style={{ padding: "15px" }}>{findMissingIntText}</div>
      </Card>
    </Container>
  );
};

export default MissingInt;
