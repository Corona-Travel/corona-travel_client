import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useRouter } from "next/router";

import Marker from "./marker";

interface Map2DProps {}

const Map2D = (props: React.PropsWithChildren<Map2DProps>) => {
  const { children } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          // center: new google.maps.LatLng(-34.397, 150.644),
          // center: new google.maps.LatLng(55.751244, 37.618423),
          center: new google.maps.LatLng(47.4979127, 19.040235),
          zoom: 3,
          // minZoom: 1,
          // draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true,
          mapTypeControl: false,
          streetViewControl: false,
          gestureHandling: "cooperative",
        }),
      );
    }
  }, [ref, map]);

  return (
    <div id="map2D" ref={ref} className="w-full h-full">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </div>
  );
};

const render = (status: Status) => {
  return <span>{status}</span>;
};

interface WrappedMap2DProps {
  apiKey: string;
  markers2D?: Markers2D;
}

const WrappedMap = (props: WrappedMap2DProps) => {
  const { apiKey, markers2D = [] } = props;

  const router = useRouter();

  const onMarkerClick = (marker2D: Marker2D) => () => {
    console.log(`marker of place ${marker2D.place_id} was clicked`);
    router.push(`/panorama/${marker2D.pos[0]}/${marker2D.pos[1]}`);
  };

  return (
    <div className="w-full" style={{ height: "90vh" }}>
      <Wrapper apiKey={apiKey} render={render}>
        <Map2D>
          {markers2D.map((marker2D) => (
            <Marker
              key={marker2D.place_id}
              position={{
                lng: marker2D.pos[0],
                lat: marker2D.pos[1],
              }}
              label={marker2D.name}
              title={marker2D.name}
              onClick={() => onMarkerClick(marker2D)}
            />
          ))}
        </Map2D>
      </Wrapper>
    </div>
  );
};

export default WrappedMap;
