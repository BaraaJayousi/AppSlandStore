import  { _getProducts } from "@/Axios";
import ProductCard from "@/components/Product/ProductCard";
import Grid from '@mui/material/Grid2';

export default async function ProductsPage() {
  const products = await _getProducts()
  console.log(typeof(products))
  return (
    <Grid container spacing={2} sx={{my:2.5}}>
      {products.map((product) =>{
        return(
          <Grid key={product.id} size={{xs:12, md:4, lg:3}} >
            <ProductCard product={product}/>
          </Grid>
        )
      })}
      
    </Grid>
  );
}