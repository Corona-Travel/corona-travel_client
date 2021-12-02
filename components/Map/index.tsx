import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {Loader} from '@googlemaps/js-api-loader';
import Head from "next/head";
import Script from 'next/script'

type MapProps = {
  markers2D?: Markers2D;
  markers3D?: Markers3D;
};

type WrappedMapProps = MapProps & {
  apiKey: string;
};

function onMarkerClick(place_id: string) {
  return (event: MouseEvent) => {
    console.log(`marker of place ${place_id} was clicked`);
  };
}

const Marker: React.Component<google.maps.MarkerOptions> = (options: any) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

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

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

const Map = (props: MapProps) => {
  const { markers2D = [], markers3D = [] } = props;
  // console.table(markers2D);
  // console.table(markers3D);

  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      let map = new window.google.maps.Map(
        ref.current,
        {
          center: new google.maps.LatLng(-34.397, 150.644), //55.751244, 37.618423),
          zoom: 1,
          minZoom: 1,
        }
      );
      map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});
      setMap(map);
    }
  }, [ref, map]);

  return (
    <div id="map" ref={ref} className="w-full h-3/5">
    </div>
  )
};

const render = (status: Status) => {
  return <>{status}</>;
};

const WrappedMap = ({apiKey, markers2D, markers3D}: WrappedMapProps) => {
  return (
  <Wrapper apiKey={apiKey} render={render}>
    <Map markers2D={markers2D} markers3D={markers3D}/>
  </Wrapper>
  );
}

export default WrappedMap
