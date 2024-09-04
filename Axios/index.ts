import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
});

const _getProducts = async () =>{
  const {data} = await axiosInstance.get('/products');
  return data;
}

const _getProductById =  async (id) =>{
  const {data} = await axiosInstance.get(`/products/${id}`)
  return data
}
export { axiosInstance, _getProducts, _getProductById};