import  { _getAllCategories, _getProducts } from "@/Axios";
import ProductCard from "@/components/Product/ProductCard";
import CategoriesFilter from "@/components/Product/CategoriesFilter";
import Grid from '@mui/material/Grid2';
import { Product } from "@/TS_Types/products_type";
import ProductsComponent from "@/components/Product/ProductsComponent";

export default async function ProductsPage() {
  
  return (
    <>
      <ProductsComponent />
    </>
  );
}