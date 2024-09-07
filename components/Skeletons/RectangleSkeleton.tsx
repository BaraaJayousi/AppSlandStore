import { Skeleton } from '@mui/material'
import Grid from '@mui/material/Grid2'

export const RectangleSkeleton = () =>{
  return(
    <Grid container justifyContent="center" sx={{ width: '100%' }}>
      <Grid size={{xs:6}}  >
        <Skeleton variant="text" sx={{ fontSize: '2.5rem' }} />
      </Grid>
    </Grid >
  )
}