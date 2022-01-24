import { api } from "../utils/api.js";

export async function getFruits(req, res) {
  try {
    const { data } = await api.get("/fruit/all");
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
}
