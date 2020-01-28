// import React, { Component } from "react";
import React from "react";
import { useAsync } from "react-async";

// this calls our Express Backend on the same server during development. This must be changed to the full path in production.
const loadApiData = async () =>
  await fetch("http://localhost:8000/testRoute")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

function Example() {
  const { data, error, isLoading } = useAsync({ promiseFn: loadApiData });
  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    return (
      <>
        <p className="animated fadeIn">{data.text}</p>
      </>
    );
}

export default Example;
