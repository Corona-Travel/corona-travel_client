import type { NextPageWithTitle } from "./_app";
import useSWR from "swr";

import { Map2D } from "components";

// replace with data fetching

const fetcher = async (url: string) => fetch(url).then((res) => res.json());
// const fetcher = async (url: string) => await Axios.get(url).then((res) => res.data);

const Map2DPage: NextPageWithTitle = () => {
  const { data: markers2D, error } = useSWR<Markers2D>(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/"
    }map_2d/map/2D`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!markers2D) return <div>loading...</div>;
  return (
    <Map2D
      apiKey={process.env.NEXT_PUBLIC_GMAP_KEY || ""}
      markers2D={markers2D}
    />
  );
};

Map2DPage.title = "Corona Travel / Map";

export default Map2DPage;
