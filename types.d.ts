// openapi schemes

type Position = [numebr, number];

type Marker2D = {
  name: string;
  pos: Position;
  place_id: string; // for url of place
};

type Markers2D = Array<Marker2D>;

enum Marker3DType {
  fact = "fact",
  media = "media",
  quiz = "quiz",
}

type Marker3D = {
  pos: Position;
  name: string;
  type: Marker3DType;
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

declare module "react-alert-template-basic";
