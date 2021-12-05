import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import Marker from "./marker";

interface Map3DProps {
  start_lat: number;
  start_lng: number;
}


const Map3D = (props: Map3DProps) => {
  const { start_lat=0, start_lng=0 } = props;

  console.log("!", start_lat, start_lng)

  const ref = React.useRef<HTMLDivElement>(null);

  const [panorama, setPanorama] = React.useState<google.maps.StreetViewPanorama>();
  const [markers, setMarkers] = React.useState<google.maps.Marker[]>();

  const handlePositionChange = () => {
    if (panorama) {
      const new_pos = panorama.getPosition();
      console.log(new_pos);

    }
  }

  React.useEffect(() => {
    if (ref.current && !panorama) {
      const map = new window.google.maps.Map(ref.current, {
        center: {lat: start_lat, lng: start_lng},
        zoom: 0,
      })
      const p = map.getStreetView()
      p.setVisible(true)
      p.setPosition({lat: start_lat, lng: start_lng})
      p.setPov({
        heading: 34,
        pitch: 10,
      })
      p.addListener("position_changed", handlePositionChange)
      setPanorama(p)
    }
  }, [ref, panorama])

  return <div id="map3D" ref={ref} className="w-full h-full" />
};

const render = (status: Status) => {
  return <span>{status}</span>;
};

interface WrappedMap3DProps extends Map3DProps {
  apiKey: string;
}

const WrappedMap = (props: WrappedMap3DProps) => {
  const { apiKey, start_lat, start_lng } = props;

  return (
    <div className="w-full" style={{ height: "90vh" }}>
      <Wrapper apiKey={apiKey} render={render}>
        <Map3D start_lat={start_lat} start_lng={start_lng} />
      </Wrapper>
    </div>
  );
};

export default WrappedMap
