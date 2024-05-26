import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../database.json";

export default function handle(request: NextApiRequest, response: NextApiResponse) {
    response.status(200).json(products)
}