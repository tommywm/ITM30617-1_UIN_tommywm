import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Callout = styled.h1`
  display: inline-block;
  background-color: #ffc600;
  padding: 20px;
  transform: rotate(-5deg);
  transition-duration: 1s;

  &:hover {
    transform: rotate(1080deg);
    transition-duration: 1s;
  }
`;

const Title = ({ title }) => (
  <>
    <Callout>{title}</Callout>
  </>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
