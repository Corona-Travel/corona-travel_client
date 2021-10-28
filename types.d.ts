type Position = {
  lat: numebr;
  lng: number;
};

type Marker = {
  marker_id: string; // for rendering
  name: string;
  pos: Position;
  place_id: string; // for url of place
};
