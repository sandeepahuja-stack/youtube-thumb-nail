import React from 'react';
import AccordianHoc from '../../../layouts/AccordianHoc';

function Accordian(props) {
  const {isAccordianOpen, updateAccordianOpen, heading} = props;
  return (
    <div className="card mb-3">
      <h5 className="card-header btn text-left" onClick={()=>{
        updateAccordianOpen(!isAccordianOpen)
      }}>{heading}</h5>
      <div className={`${isAccordianOpen ? 'card-body' : 'd-none'}`}>
        <p className="card-text">{props.children}</p>
      </div>
    </div>
  )
}

export default AccordianHoc(Accordian);
