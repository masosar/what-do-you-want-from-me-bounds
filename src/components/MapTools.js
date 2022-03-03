import React from "react";

const MapTools = () => {
  return (
    <div className="filter-container">
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
