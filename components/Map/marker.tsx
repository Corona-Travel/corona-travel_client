import React from "react";

const Marker = (options: any) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  // create marker on startup
  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  // update options with new settings
  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  // don't render anything
  return null;
};

export default Marker
