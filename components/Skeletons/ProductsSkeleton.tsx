import { Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const ProductsSkeleton = () =>{
  return (
    <>
      {Array(20).fill(null).map((arr:Number) =>{
          return(
            <Grid key={arr + ''} size={{xs:12, md:4, lg:3}} >
              <Skeleton variant="rounded" width="100%" height={270} />
            </Grid>
          )
        })}
    </> 
  )
}