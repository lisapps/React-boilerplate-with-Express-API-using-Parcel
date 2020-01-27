// import React, { Component } from "react";
import React from "react";
import { useAsync } from "react-async";

const loadApiData = async () =>
  await fetch("http://localhost:9000/testAPI")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

function ApiTest() {
  const { data, error, isLoading } = useAsync({ promiseFn: loadApiData });
  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    return (
      <>
        <p className="App-intro">{data.text}</p>
      </>
    );
}

export default ApiTest;
