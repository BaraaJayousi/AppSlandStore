import { Skeleton } from "@mui/material";
import Grid  from "@mui/material/Grid2";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Grid container spacing={2} sx={{my:2.5}}>
      <Grid container justifyContent="center" sx={{ width: '100%' }}>
        <Grid size={{xs:6}}  >
          <Skeleton variant="text" sx={{ fontSize: '2.5rem' }} />
        </Grid>
      </Grid >
      <Grid container sx={{ width: '100%' }}>
        {Array(20).fill(null).map((arr:Number) =>{
          return(
            <Grid key={arr + ''} size={{xs:12, md:4, lg:3}} >
              <Skeleton variant="rounded" width="100%" height={270} />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}