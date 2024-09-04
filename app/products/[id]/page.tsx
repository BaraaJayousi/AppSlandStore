import { _getProductById } from "@/Axios";
import { Box, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default async function ProductPage({ params }: { params: { id: string } }) {

  const product = await _getProductById(params.id)

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{mb:2.5}}>
        <Link underline="hover" href="/products">
          Products
        </Link>
        <Typography sx={{ color: 'text.primary' }}>{product.title}</Typography>
      </Breadcrumbs>
      <Grid container sx={{justifyContent: "space-between", flexDirection:{xs:"column-reverse", md:'row'}}} spacing={3}>
        <Grid size={{md:6}}>
          <Stack direction={"column"}>
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="h3">{product.price} $</Typography>
            <Typography variant="h5">Category: {product.category}</Typography>
            <Typography variant="h4">Description</Typography>
            <Typography variant="subtitle2">{product.description}</Typography>
          </Stack>
        </Grid>
        <Grid container size={{md:6}} sx={{justifyContent:{xs:'center'}}}>
          <Box
            component="img"
            alt="product image"
            src={product.image}
            sx={{
              maxWidth:"60%"
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}