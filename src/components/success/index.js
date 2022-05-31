import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, ImageListItem } from '@mui/material';
import { Container } from '@mui/system';
import './style.css'


const data = [
  {
    img: 'https://www.themezaa.com/html/leadgen/demo/charity/images/agency-blog-img01.jpg',
    title: 'MARTIN SMITH 29 JULY, 2016',
    name: 'CREATIVITY TAKES COURAGE',
    tit: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.',
  },
  {
    img: 'https://www.themezaa.com/html/leadgen/demo/charity/images/agency-blog-img02.jpg',
    title: 'PAUL SCRIVENS 26 JULY, 2016',
    name: 'AN ARTIST IS TO BELIEVE IN LIFE',
    tit: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.',
  },
  {
    img: 'https://www.themezaa.com/html/leadgen/demo/charity/images/agency-blog-img03.jpg',
    title: 'MARTIN SMITH 24 JULY, 2016',
    name: 'ONE EYE SEES, THE OTHER FEELS',
    tit: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.',
  },
]



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Success() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box>
              <Typography>
                <Typography variant='h4' sx={{ textAlign: 'center', fontWeight: '700' }}>SUCCESS STORY</Typography>
                <Box sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                  <Typography sx={{ color: '#707070', width: '65%', mt: 3 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                </Box>
              </Typography>
            </Box>
          </Grid>
          {data.map((item) => {
            return (
              <Grid item xs={12} md={4} >


                <Box sx={{ textAlign: 'center', mt: 10 }} >
                  <Typography>
                    <Box sx={{ background: '#F6F6F6' }} >
                      <ImageListItem
                        key={item.img} ImageListItem
                        sx={{ display: "block", cursor: "pointer" }}
                      >
                        <figure>
                          <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          loading="lazy"
                            className="img"
                          />
                        </figure>
                      </ImageListItem>
                      <Container>
                        <Typography sx={{ background: '#FF573D', mt: 3, height: '25px' }} >
                          <Typography sx={{ color: 'white', fontSize: '13px', pt: '4px' }} >{item.title}</Typography>
                        </Typography>
                        <Typography sx={{ fontSize: '13px', fontWeight: "700", mt: 3 }} >{item.name}</Typography>
                        <Typography sx={{ color: '#707070', mt: 1 }} >{item.tit}</Typography>
                      </Container>
                      <br />
                    </Box>
                  </Typography>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  );
}



export default Success