'use client';

import Grid from "@mui/material/Grid2";
import { _getAllCategories, _getProducts } from "@/Axios";
import ProductCard from "./ProductCardComponent";
import { useEffect, useState } from "react";
import { Product } from "@/TS_Types/products_type";
import { useSearchParams } from "next/navigation";
import SearchComponent from "./SearchComponent";
import { ProductsSkeleton } from "@/components/Skeletons/ProductsSkeleton";

const ProductsPage =  () => {

  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [searchInput, setSearchInput] = useState('')
  const currentParams = useSearchParams();
  const currentCategory  = currentParams.get('category')

  
  
  useEffect(() => {
    _getProducts(currentCategory).then((res) => {
      setProducts(res);
      setIsLoading(false)
    })
      .catch((error) => console.log("error happened while fetching the products: ", error))
  },[])

  const searchProducts = (searchValue : string) =>{
    setSearchInput(searchValue)
    if(searchValue !== ''){
      const filteredData = products.filter((product) =>{
        return Object.values(product.title).join('').toLowerCase().includes(searchValue.toLowerCase())
      });
      setFilteredProducts(filteredData);
    }else{
      setFilteredProducts(products);
    }
  }
  
  return(
    <Grid container spacing={2} sx={{my:2.5, width: '100%'}} >
      {isLoading?(<ProductsSkeleton/>)
      :( <Grid container  justifyContent="center"  sx={{ width: '100%'}}>
        <Grid size ={{xs:12, md:6}}>
          <SearchComponent onSearchInput={searchProducts} />
        </Grid>
      </Grid>)}
      {searchInput.length > 1? filteredProducts.map((product: Product) =>{
        return(
          <Grid key={product.id} size={{xs:12, md:4, lg:3}} >
            <ProductCard product={product}/>
          </Grid>
        )
      }): products.map((product: Product) =>{
        return(
          <Grid key={product.id} size={{xs:12, md:4, lg:3}} >
            <ProductCard product={product}/>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProductsPage;