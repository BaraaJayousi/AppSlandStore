'use client';

import Grid from "@mui/material/Grid2";
import CategoriesFilter from "./CategoriesFilter";
import ProductCard from "./ProductCard";
import { _getAllCategories, _getProducts, _getProductsInCategory } from "@/Axios";
import { Product } from "@/TS_Types/products_type";
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";

const ProductsComponent = async () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const categoryParams = useSearchParams();
  const currentCategory = categoryParams.get('category')

  useEffect(() =>{
    const fetchProducts = async () =>{
      if(currentCategory?.length == 0 || currentCategory == 'all' || currentCategory == undefined){
        setProducts(await _getProducts());
      }else{
        setProducts(await _getProductsInCategory(currentCategory));
      }
    }

    const fetchCategories = async ()  =>{
      const cata = await _getAllCategories();
      setCategories(['all', ...cata]);
    }

    fetchCategories();
    fetchProducts();
  }, [])
  
  return(
    <Grid container justifyContent="center" spacing={2} sx={{my:2.5, width: '100%'}} >
      <Grid container >
        <CategoriesFilter categories={categories}/>
      </Grid>
      <Grid container>
        {products.map((product: Product) =>{
          return(
            <Grid key={product.id} size={{xs:12, md:4, lg:3}} >
              <ProductCard product={product}/>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default ProductsComponent;