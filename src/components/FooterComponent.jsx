import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        padding: '20px 50px',
        borderTop: '1px solid #ccc',
        position: 'relative',
        bottom: 0,
        left: 0,
        width: '100%',
      }}
    >
      <Grid container spacing={3} sx={{ paddingBottom: '20px' }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            ShenCarCar
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#757575',
              marginTop: '10px',
              lineHeight: '1.6',
            }}
          >
            Our vision is to provide convenience <br /> and help increase your sales business.
          </Typography>
        </Grid>
        
        <Grid item xs={12} sm={2} sx={{ textAlign: 'left' }} style={{position : 'relative', left : '20%'}}> {/* יישור לשמאל */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            About
          </Typography>
          <Link
            href="#"
            sx={{
              display: 'block',
              color: '#757575',
              marginBottom: '5px',
              textDecoration: 'none',
            }}
          >
            How it works
          </Link>
          <Link
            href="#"
            sx={{
              display: 'block',
              color: '#757575',
              marginBottom: '5px',
              textDecoration: 'none',
            }}
          >
            Featured
          </Link>
          <Link
            href="#"
            sx={{
              display: 'block',
              color: '#757575',
              marginBottom: '5px',
              textDecoration: 'none',
            }}
          >
            Partnership
          </Link>
          <Link
            href="#"
            sx={{
              display: 'block',
              color: '#757575',
              textDecoration: 'none',
            }}
          >
            Business Relation
          </Link>
        </Grid>

        <Grid item xs={12} sm={2} sx={{ textAlign: 'left' }} style={{position : 'relative', left : '20%'}}> {/* יישור לשמאל */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            Community
          </Typography>
          <Link
            href="#"
            sx={{
              display: 'block',
              color: '#757575',
              marginBottom: '5px',
              textDecoration: 'none',
            }}
          >
            Events
          </Link>
          <Link
            href="#"
            sx={{
              display: 'block',
              color: '#757575',
              marginBottom: '5px',
              textDecoration: 'none',
            }}
          >
            Blog
          </Link>
          <Link
            href="#"
            sx={{
              display: 'block',
              color: '#757575',
              marginBottom: '5px',
              textDecoration: 'none',
            }}
          >
            Podcast
          </Link>
          <Link
            href="#"
            sx={{
              display: 'block',
              color: '#757575',
              textDecoration: 'none',
            }}
          >
            Invite a friend
          </Link>
        </Grid>

        <Grid item xs={12} sm={2} sx={{ textAlign: 'left' }} style={{position : 'relative', left : '20%'}}> {/* יישור לשמאל */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            Socials
          </Typography>
          <Link
            href="#"
            sx={{
              display: 'block',
              color: '#757575',
              marginBottom: '5px',
              textDecoration: 'none',
            }}
          >
            Discord
          </Link>
          <Link
            href="#"
            sx={{
              display: 'block',
              color: '#757575',
              marginBottom: '5px',
              textDecoration: 'none',
            }}
          >
            Instagram
          </Link>
          <Link
            href="#"
            sx={{
              display: 'block',
              color: '#757575',
              marginBottom: '5px',
              textDecoration: 'none',
            }}
          >
            Twitter
          </Link>
          <Link
            href="#"
            sx={{
              display: 'block',
              color: '#757575',
              textDecoration: 'none',
            }}
          >
            Facebook
          </Link>
        </Grid>
      </Grid>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#757575',
          }}
        >
          ©2025 ShenCarCar. All rights reserved.
        </Typography>
        <Box style = {{position : 'relative',right : '7%'}}>
          <Link
            href="#"
            sx={{
              marginRight: '15px',
              color: '#757575',
              textDecoration: 'none',
            }}
          >
            Privacy & Policy
          </Link>
          <Link
            href="#"
            sx={{
              color: '#757575',
              textDecoration: 'none',
            }}
          >
            Terms & Condition
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
