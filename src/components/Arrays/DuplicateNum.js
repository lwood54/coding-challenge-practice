import React, { useState, useEffect } from "react";
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

import cls from "./Arrays.module.css";

const DuplicateNum = () => {
  const [arrayToCheck, setArrayToCheck] = useState([]);
  const createNewArray = () => {
    let randomIndex = Math.floor(Math.random() * 20);
    let anotherRandInd = Math.floor(Math.random() * 20);
    let newArray = [];
    for (let i = 1; i <= 20; i++) {
      let randomNum = Math.floor(Math.random() * 2000);
      newArray.push(randomNum);
    }
    let duplicate = newArray[randomIndex];
    newArray.splice(anotherRandInd, 0, duplicate);
    setArrayToCheck(newArray);
  };
  // const findDuplicate = array => {
  //   for (let i = 0; i < array.length; i++) {
  //     for (let k = i + 1; k < array.length; k++) {
  //       if (array[i] === array[k]) {
  //         return array[i];
  //       }
  //     }
  //   }
  // };
  // ALTERNATE method using .includes()
  const findDuplicate = array => {
    let copy = [...array];
    for (let i = 0; i < array.length; i++) {
      // checks if value starting at index + 1 is in the copy array
      if (copy.includes(array[i], i + 1)) {
        return array[i];
      }
    }
  };

  // initial component mount and array creation
  useEffect(() => {
    createNewArray();
  }, []);
  const arrayToDisplay = arrayToCheck.map((num, i) => {
    return (
      <div key={i} style={{ display: "inline-block" }}>
        {num},
      </div>
    );
  });
  let duplicateInt = findDuplicate(arrayToCheck);
  let duplicateIntText = `
	const findDuplicate = array => {
    for (let i = 0; i < array.length; i++) {
      for (let k = i + 1; k < array.length; k++) {
        if (array[i] === array[k]) {
          return array[i];
        }
      }
    }
  };
  `;
  const duplicateIntText2 = `
  const findDuplicate = array => {
    let copy = [...array];
    for (let i = 0; i < array.length; i++) {
      // checks if value starting at index + 1 is in the copy array
      if (copy.includes(array[i], i + 1)) {
        return array[i];
      }
    }
  };
  `;
  return (
    <Container className={cls.AltArraysSection}>
      <h4 className={cls.subsectionHeading}>Duplicate Number in an Array</h4>
      <h3>How do you find the duplicate number on a given integer array?</h3>
      <Card>
        <CardBody>
          <CardTitle>
            <strong>Intial thoughts:</strong>
          </CardTitle>
          <CardText>
            I would compare each index position to all following index position
            values. Iterate through the array while referencing the changed
            index position on each iteration.
          </CardText>
          <CardText>
            An alternate approach would be to create a copy of the array, and
            use includes() to see if the value at each index is included
            anywhere in a duplicate array aside from the current index.
          </CardText>
          <CardSubtitle>
            <strong>Array to Check:</strong>
          </CardSubtitle>
          <div>{arrayToDisplay}</div>
          <div className={cls.buttonContainer}>
            <Button
              color="dark"
              size="sm"
              className={cls.button}
              onClick={createNewArray}
            >
              Make a new duplicate integer!
            </Button>
            <Alert color="success" className={cls.Alert}>
              Duplicate integer:
              <p>
                <strong>{duplicateInt}</strong>
              </p>
            </Alert>
          </div>
          <div>{duplicateIntText}</div>
          <div>
            <strong>Alternate approach with JS methods</strong>
          </div>
          <div>{duplicateIntText2}</div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default DuplicateNum;
