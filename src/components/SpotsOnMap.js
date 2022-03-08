import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttps";
import LeafletMap from "./LeafletMap";
import Loader from "./ui/Loader";
import Message from "./ui/Message";

const SpotsOnMap = () => {
  const [spotData, setSpotData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //   let api = helpHttp();
  // let url = "https://staging.spot2.mx/api/spots/";
  let url = "/spots";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setSpotData(res);
          setError(null);
          // console.log("res", res);
        } else {
          setSpotData(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  // Filters - The api delivers data from different cities. Firs I get only for cdmx (and where is_public > 0) and update the value of the state
  const convertToObject = Object.values(spotData);
  const spotsInitiallyFiltered = convertToObject.filter(
    (spot) => spot.city_id === 184 && spot.is_public > 0
  );

  return (
    <div className="grid-1-2">
      {loading ? (
        loading && <Loader />
      ) : (
        <LeafletMap spots={spotsInitiallyFiltered} />
      )}
      {/* <Loader /> */}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor={"#dc3545"}
        />
      )}
    </div>
  );
};

export default SpotsOnMap;
