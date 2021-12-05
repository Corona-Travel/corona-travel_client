// openapi schemes

type Position = [numebr, number];

type Marker2D = {
  name: string;
  pos: Position;
  place_id: string; // for url of place
};

type Markers2D = Array<Marker2D>;

type Marker3D = {
  pos: Position;
  name: string;
  type: string;
  marker_id: string;
};

type Markers3D = Array<Marker3D>;

// internal types

type UserInfo = {};

type Navigation = {
  name: string;
  href: string;
};

type NavigationWithCurrent = {
  name: string;
  href: string;
  current: boolean;
};

type Navigations = Array<Navigation>;
type NavigationsWithCurrent = Array<NavigationWithCurrent>;
