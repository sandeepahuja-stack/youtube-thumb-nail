import React, { useState, useEffect } from 'react'

function AccordianHoc(OriginalComponent) {
  function NewComponent(props) {
    const { isOpen } = props;
    const [isAccordianOpen, updateAccordianOpen] = useState(isOpen);

    return (
      <OriginalComponent {...props} isAccordianOpen={isAccordianOpen} updateAccordianOpen={updateAccordianOpen}/>
    )
  }
  return NewComponent;
}

export default AccordianHoc;

