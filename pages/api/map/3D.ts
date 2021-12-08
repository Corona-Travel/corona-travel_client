// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Markers3D>,
) {
  res.status(200).json([
    {
      name: "Moscow",
      pos: [55.751244, 37.618423],
      marker_id: "0",
      type: "fact",
    },
  ]);
}
