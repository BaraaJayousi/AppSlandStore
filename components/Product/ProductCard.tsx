import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

const ProductCard = ({ sx = {}, product}) => {
  const title_length = 25;
  return(
    <Card 
      sx={{
        minWidth: 250,
        minHeight:250,
        mx:{xs:2, md:0},
        ...sx }} >
      <CardActionArea href={`products/${product.id}`}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
          sx={{p:1, objectFit:'contain'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title.length > title_length? product.title.slice(0,title_length)+'...': product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {product.price} $
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard