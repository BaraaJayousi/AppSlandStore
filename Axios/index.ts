import { Product } from "@/TS_Types/products_type";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  // timeout: 10000,
});

// Fetches all products from the backend (fakestore),
//if given a category it fetches the products in that category
const _getProducts = async (category : string | null = '') : Promise<Product[]> =>{
  let response 
  if(category?.length == 0 || category == 'all' || category == undefined){
    response = await axiosInstance.get('/products');
  }else{
    response = await axiosInstance.get(`/products/category/${category}`);
  }
  return response.data;
}


//Fetches a product from the backend (fakestore)
const _getProductById =  async (id:number) =>{
  const {data} = await axiosInstance.get(`/products/${id}`);
  return data;
}

//Fetches all categories from the backend (fakestore)
const _getAllCategories = async () : Promise<string[]> => {
  const {data} = await axiosInstance.get('/products/categories');
  return data;
}

// const _getProductsInCategory = async (category:string) : Promise<Product[]> =>{
//   const {data} = await axiosInstance.get(`/products/category/${category}`);
//   return data;
// }

export { _getProducts, _getProductById, _getAllCategories};