import axios from "axios";
import { JAVA_API_SERVICE_URL } from "../url/javaUrl";

const API_URL = `${JAVA_API_SERVICE_URL}/api/v1/product/create`;

/** Create New Product */
const createProducts = async (formData) => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    API_URL,
    formData,
    { withCredentials: true, credentials: "include" },
    config
  );
  return response.data;
};

const productServiceJava = {
  createProducts,
};

export default productServiceJava;
