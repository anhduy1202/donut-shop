import { location } from "./location";

export default function handler(req: any, res: any) {
  res.status(200).json(location);
}
