import React, { useEffect, useState } from "react";

const UseEffetctHook = () => {
  const [value, setvalue] = useState(0);
  const [dummy, setdummyval] = useState(0);
  console.log("before use effect  1");
  var x = 10;
  useEffect(() => {
    console.log("inside use_effect 2 ");

    setdummyval(dummy + 1);
  }, [value]);

  console.log("after use effect 4");

  const buttonhandler = () => {
    console.log("button handler function 5");
    setvalue(value + 1);
    setdummyval(dummy + 1);
    // setdummyval(dummy + 1);
    // console.log(dummy);
  };
  //   console.log("dummy", dummy);
  return (
    <div>
      {console.log("inside jsx 6")}
      <div>dummy{dummy}</div>
      <div>{value}</div>

      <p>welcome</p>
      <button onClick={buttonhandler}>increment</button>
    </div>
  );
};

export default React.memo(UseEffetctHook);
