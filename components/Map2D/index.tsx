import { Component, MouseEvent } from "react";
import GoogleMapReact from "google-map-react";

import Marker from "components/Marker";

type MapProps = {
  APIkey: string;
  zoom?: number;
  center?: Position;
  markers?: Markers;
};

type MapState = {};

class Map2D extends Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props);
    this.state = {} as MapState;

    // uncomment if u r using this in handler
    // this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(place_id: string) {
    return (event: MouseEvent) => {
      console.log(`marker of place ${place_id} was clicked`);
    };
  }

  render() {
    const {
      APIkey,
      zoom = 0,
      center = { lng: 0, lat: 0 },
      markers = [],
    } = this.props;

    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: APIkey,
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers.map((marker: Marker) => (
          <Marker
            // rendering stuff
            key={marker.place_id}
            // position
            {...marker.pos}
            name={marker.name}
            onClick={this.onMarkerClick(marker.place_id)}
          />
        ))}
      </GoogleMapReact>
    );
  }
}

export default Map2D;
