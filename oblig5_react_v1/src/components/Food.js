import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  margin: 20px auto;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 20px;
  padding: 20px;
  margin: 4px;
`;
const Food = ({ food, title }) => {
  const foodList = food;

  return (
    <>
      <h1>{title}</h1>
      <List>
        {foodList.map((item) => (
          <ListItem key={Math.random()}>{item}</ListItem>
        ))}
      </List>
    </>
  );
};

Food.propTypes = {
  food: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Food;
