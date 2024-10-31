import React from 'react'

function Sample(props) {
  return (
    <>
    <p> Hello</p>
    <p> Hello 123</p>
    <h1>{props.name}</h1>
    <p> {props.details}</p>
    </>
  );
}

export default Sample