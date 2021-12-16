import type { NextPageWithTitle } from "../../../_app";
import { useRouter } from "next/router";
// import styles from "../styles/Map.module.css";
import useSWR from "swr";

import { Map3D, TopBar } from "components";

// function isNullOrUndefined<T>(value: T | null | undefined): value is null | undefined {
//   return value === null || value === undefined;
// }

const Map3DPage: NextPageWithTitle = () => {
  const router = useRouter();
  const { lng = "", lat = "" } = router.query;

  if (lat && lng) {
    return (
      <Map3D
        apiKey={process.env.NEXT_PUBLIC_GMAP_KEY || ""}
        start_lng={parseFloat(lng as string)}
        start_lat={parseFloat(lat as string)}
      />
    );
  } else {
    return <div>Loading</div>;
  }
};

Map3DPage.title = "Corona Travel / Panorama";

export default Map3DPage;
