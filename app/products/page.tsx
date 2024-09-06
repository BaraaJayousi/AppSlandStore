
import { _getProducts } from "@/Axios";
import CategoriesFilter from "@/components/Product/CategoriesFilterComponent";
import ProductsComponent from "@/components/Product/ProductsComponent";
import { Suspense } from "react";

export default async function ProductsPage() {
  return (
    <>
        <CategoriesFilter />
        <ProductsComponent />
    </>
  );
}