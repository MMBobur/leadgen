import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';


const data = [
    {
        img:'https://www.themezaa.com/html/leadgen/demo/charity/images/client1.png',
    }, 
    {
        img:'https://www.themezaa.com/html/leadgen/demo/charity/images/client2.png',
    },
    {
        img:'https://www.themezaa.com/html/leadgen/demo/charity/images/client3.png',
    },
    {
        img:'https://www.themezaa.com/html/leadgen/demo/charity/images/client4.png',
    },
]


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function Toronto() {
  return (
    <>
 <Box sx={{ flexGrow: 1,background:'#282828',mt:15 }}>
      <Container>

      <Grid container spacing={2}>
          {data.map((item)=>{
              return(

              
                  <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Typography><img style={{marginTop:'80px',width:'100%'}} src={item.img} /></Typography>
          </Box>
        </Grid>
          )})}
      </Grid>
      </Container>
    <br/>
    <br/>
    <br/>
    <br/>
    </Box>
    </>
  )
}

export default Toronto