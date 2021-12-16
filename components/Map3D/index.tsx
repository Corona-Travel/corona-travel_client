import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import axios from "axios";
import { useAlert } from "react-alert";
import processMarkers from "./processMarker";

interface Map3DProps {
  start_lng: number;
  start_lat: number;
}

const addInfoWindow = (
  marker: google.maps.Marker,
  map: google.maps.Map,
  content: string,
) => {};

const Map3D = (props: Map3DProps) => {
  const { start_lng = 0, start_lat = 0 } = props;

  const map_ref = React.useRef<HTMLDivElement>(null);

  const [map, setMap] = React.useState<google.maps.Map>();
  const [panorama, setPanorama] =
    React.useState<google.maps.StreetViewPanorama>();

  const alert = useAlert();

  React.useEffect(() => {
    if (map_ref.current && !panorama) {
      const m = new window.google.maps.Map(map_ref.current, {
        center: new google.maps.LatLng(47.4979127, 19.040235),
        zoom: 3,
      });
      setMap(m);

      const p = m.getStreetView()!;
      p.setOptions({
        visible: true,
        position: { lng: start_lng, lat: start_lat },
        // enableCloseButton: false,
      });
      p.setPosition({ lng: start_lng, lat: start_lat });
      setPanorama(p);
    }
  }, [start_lng, start_lat, map_ref, map, panorama]);

  React.useEffect(() => {
    let markers: google.maps.Marker[] = [];
    if (panorama) {
      const updater = () => {
        const new_pos = panorama.getPosition()!;
        console.log("new position:", {
          lng: new_pos.lng(),
          lat: new_pos.lat(),
        });

        axios
          .get(
            `${
              process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/"
            }map_3d/map/3D/${new_pos.lng()}/${new_pos.lat()}?max_distance=100`,
          )
          .then((res) => {
            let markers3D: Markers3D = res.data;
            for (let marker3D of markers3D) {
              console.log(marker3D);
              let url: string, content_promise: Promise<any>;

              switch (marker3D["type"]) {
                case "fact":
                  url =
                    "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_purpleF.png";
                  break;
                case "media":
                  url =
                    "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blueM.png";
                  break;
                case "quiz":
                  url =
                    "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_yellowQ.png";
                  break;
                default:
                  url =
                    "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_white.png";
                  break;
              }

              const marker = new google.maps.Marker({
                position: { lng: marker3D["pos"][0], lat: marker3D["pos"][1] },
                map,
                icon: {
                  url,
                  size: new google.maps.Size(22, 40),
                  origin: null,
                  anchor: null,
                  labelOrigin: new google.maps.Point(11, 50),
                  // labelOrigin: null,
                },
                title: marker3D["name"],
                label: marker3D["name"],
              });

              const infoWindow = new google.maps.InfoWindow({});

              marker.addListener("click", () => {
                processMarkers({
                  type: marker3D["type"],
                  id: marker3D["marker_id"],
                }).then((m) => {
                  alert.show(m);
                });
              });

              markers.push(marker);
            }
          })
          .catch((e) => console.log(e));
      };
      updater();
      panorama.addListener("position_changed", updater);
    }

    return () => {
      for (let marker of markers) {
        marker.setMap(null);
      }
    };
  }, [map, panorama, alert]);

  return (
    <>
      <div id="map3D" ref={map_ref} className="w-full h-full" />
    </>
  );
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

export default WrappedMap;
