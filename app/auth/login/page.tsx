import { Box, Card, CardContent, CardHeader}  from '@mui/material';
import Grid from '@mui/material/Grid2';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LoginForm from '../../../components/Authentication/LoginForm';



export default async function Login() {

  return (
    <>
      <Box sx={{ minHeight: '50vh'}}>
        <Grid 
          container
          direction="column"
          justifyContent="flex-end"
          sx={{
            minHeight: '50vh'
          }}
        >
          
          <Grid size={{xs: 12}}>
            <Grid
              container
              size={{xs:12}}
              justifyContent="center"
              alignItems="center"
              sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
            >
              <Grid>
                <Card
                  sx={{
                    maxWidth: { xs: 400, lg: 475 },
                    margin: { xs: 0, md: 3 },
                    '& > *': {
                      flexGrow: 1,
                      flexBasis: '50%'
                    }
                  }}>
                  
                  <CardHeader 
                    sx={{
                      px:0,
                      pt:2.5,
                      '& .MuiCardHeader-title': { m: '0px auto', alignSelf: 'center', textAlign: 'center' }
                    }}
                    titleTypographyProps={{ variant: 'h6' }}
                    title={<LoginOutlinedIcon fontSize='large' color="primary"/>}/>
                  <CardHeader 
                    sx={{
                      p:0,
                      px: 2.5,
                      '& .MuiCardHeader-title': { m: '0px auto', alignSelf: 'center', textAlign: 'center' }
                    }}
                    titleTypographyProps={{ variant: 'h3' }}
                    title="Welcome!"/>
                  <CardHeader 
                    sx={{
                      p:0,
                      px: 2.5,
                      color: 'text.primary',
                      '& .MuiCardHeader-title': { m: '0px auto', alignSelf: 'center', textAlign: 'center' }
                    }}
                    titleTypographyProps={{ variant: 'subtitle1' }}
                    title="Sign in to your account"
                  />

                    <CardContent>
                      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                        <LoginForm />
                      </Box>
                    </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Box>
    </>
  );
}