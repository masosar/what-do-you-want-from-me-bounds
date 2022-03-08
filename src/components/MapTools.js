import React, { useState } from "react";
import { Checkbox, Collapse } from "antd";

const { Panel } = Collapse;
const spotType = [
  {
    _id: 1,
    type: "Street spot",
  },
  {
    _id: 2,
    type: "In mall spot",
  },
  {
    _id: 3,
    type: "In mall island",
  },
  {
    _id: 4,
    type: "Other",
  },
];

// console.log("spotType", spotType);

const MapTools = () => {
  // const [checked, setChecked] = useState([]);

  // const handleToggle = (value) => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   setChecked(newChecked);
  // };

  // const renderSpotTypeCheckboxes = () =>
  //   spotType.map((value, index) => (
  //     <React.Fragment key={index}>
  //       <Checkbox
  //         onChange={() => {
  //           handleToggle(value._id);
  //         }}
  //         type="checkbox"
  //         checked
  //       />
  //       <span>{value.type}</span>
  //     </React.Fragment>
  //   ));

  return (
    <div className="filter-container">
      <Collapse defaultActiveKey={"0"}>
        <Panel header="Tipo de Spot" key="1">
          {/* {renderSpotTypeCheckboxes} */}
          <input type="checkbox" id="streetspot1" value={1} />
          <input type="checkbox" id="streetspot2" value={2} />
          <input type="checkbox" id="streetspot3" value={3} />
        </Panel>
      </Collapse>
      <h1>Búsqueda de spots</h1>
      <div className="spot-type">
        <h2>Tipo de Spot</h2>
        <ul>
          <li>
            <input type="checkbox" id="streetspot" value={1} />
            <label htmlFor="streetspot">Street Spot</label>
          </li>
          <li>
            <input type="checkbox" id="inmallspot" value={2} />
            <label htmlFor="inmallspot">In mall Spot</label>
          </li>
          <li>
            <input type="checkbox" id="inmallisland" value={3} />
            <label htmlFor="inmallisland">In mall Island</label>
          </li>
          <li>
            <input type="checkbox" id="othertypespot" value={4} />
            <label htmlFor="othertypespot">Other</label>
          </li>
        </ul>
      </div>
      <div className="rent-type">
        <h2>Tipo de renta</h2>
        <ul>
          <li>
            <input type="checkbox" id="shortterm" value={1} />
            <label htmlFor="shortterm">Short term</label>
          </li>
          <li>
            <input type="checkbox" id="longterm" value={2} />
            <label htmlFor="longterm">Long term</label>
          </li>
          <li>
            <input type="checkbox" id="both" value={3} />
            <label htmlFor="both">Both</label>
          </li>
        </ul>
      </div>
      <div className="apply-filter-button">
        <input type="button" value="Buscar" className="c-button" />
      </div>
    </div>
  );
};

export default MapTools;
