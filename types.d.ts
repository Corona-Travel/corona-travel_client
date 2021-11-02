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

// internal types

type UserInfo = {};

type Navigation = {
  name: string;
  href: string;
  current: boolean;
};

type Navigations = Array<Navigation>;
