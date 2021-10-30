// openapi schemes

type Position = {
  lat: numebr;
  lng: number;
};

type Marker = {
  name: string;
  pos: Position;
  place_id: string; // for url of place
};

type Markers = Array<Marker>;
