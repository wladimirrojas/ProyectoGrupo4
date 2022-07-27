import React from "react";

const FormatNumberComponent = ({number}) => {

  return <span>
    {new Intl.NumberFormat("ES-CL", {
        style: "currency",
        currency: "CLP"
      }).format(number)}
  </span>
}

export default FormatNumberComponent;