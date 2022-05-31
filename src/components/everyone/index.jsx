import React from 'react'
import { Box, Container, Typography } from '@mui/material'

function Everyone() {
  return (
    <Box sx={{ bgcolor: '#282828', width: '100%', height: '350px', textAlign: 'center', }}>
      <Container>
      <Box sx={{py:'7%'}}>
        <Box sx={{ color: '#FF573D', }}>
          <Typography sx={{ fontSize: '13px' }}>
            EVERYONE. EVERYWHERE. EQUAL VALUE.
          </Typography>
        </Box>
        <br />
        <Box sx={{ color: '#F1F1C9', }}>
          <Typography sx={{ fontSize: '20px', fontFamily: 'system-ui' }}>
            We are Leadgen. Non-profit, fundraising, NGO organizations.<br />
            Our Leadgen activities are taken place around the world,let contribute to <br />
            them with us by your hand to be a better life.
          </Typography>
        </Box>
      </Box>
      </Container>
    </Box >
  )
}

export default Everyone