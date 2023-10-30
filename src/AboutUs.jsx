import React from 'react';

import './index.css';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles'
import { CardContent, CardMedia, Typography } from '@mui/material';
import Box from '@mui/material/Box';




const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(),
  textAlign: 'center',
  boxShadow: 0,
  color: theme.palette.text.secondary,
 }));

const AboutUs = () => {
  return (
    <div className='MarginTop'>
      <Grid className='container'>
        <Card className="mycard" sx={{ minWidth: 275 }}>
          <Grid xs={12}>
            <CardMedia image={require('./image/ManyAwards.jpg')} className='award'>
              <Typography className='abc'>
                ABOUT US
              </Typography>
            </CardMedia>
          </Grid>
          <div className='Center'>
            <Typography
              sx={{
                textAlign: 'center',
                fontFamily: 'sans-serif',
                fontWeight: '600',
                fontSize: '27px',
                margin: '20px 0px 20px 0px',
                color: '#08c'
              }} className='CentAlign'
              sm={{
                textAlign: 'center',
                fontFamily: 'sans-serif',
                fontWeight: '600',
                fontSize: '18px',
                margin: '20px 0px 20px 0px',
                color: '#08c'
              }}
            >
              CHAIRMAN'S MESSAGE
            </Typography>
            <Grid className='Chairman'>
              <Stack direction={{ xs: 'column', sm: 'row' }} className='BoxMargin'>
                <div>
                  <Grid className='Ch'>
                    <Item className='ImageOfSir' style={{ boxShadow: 'none', padding: '0px' }}>
                      <CardMedia image={require('./image/Chairman_Sir.jpg')} className='ImageSpace'></CardMedia>
                    </Item>
                  </Grid>
                </div>

                <Grid className='Ch'>
                  <Item className='Message-content' style={{ boxShadow: 'none' }}>
                    <CardContent className='hint'>
                      <Typography className='MessageBySir'>
                        In this fast changing world where the structure of education is changing rapidly,
                        the teacher, profile is, undergoing a makeover too.
                        With massive revolution in knowledge and interactive technologies
                        shaping the learning environment,
                        teachers must learn to craft young minds with
                        much care and ingenuity for their wholesome development.
                        STTAR has been set up to equip educators with effective strategies and
                        skills to adapt to the frequent shifts in the education landscape
                      </Typography>
                      <div className='ADAlign'>
                        <Typography className='NameOfSir'>SHISHIR JAIPURIA</Typography>
                        <Typography className='MessageBySir'>
                          Chairman, Governing Council, JSB &<br />
                          Chairman, Seth Anandram Jaipuria Education Society<br />
                          Member, Academic Council, STTAR
                        </Typography>
                      </div>
                    </CardContent>
                  </Item>
                </Grid>
              </Stack>
            </Grid>
            <Grid className='Chairman'>
              <Stack direction={{ xs: 'column', sm: 'row' }} className='BoxMargin'>
                <Grid>
                  <Box sx={{ borderRight: 1 }}>
                    <Item className='vision-cont' style={{ boxShadow: 'none' }}>
                      <CardContent className='vision'>
                        <Typography className='future'>Our Vision</Typography>
                        <Typography className='plan'>
                          Saamarthya Teachers Training Academy of Research is set to be a premier
                          institute that will
                          enable educators to meet the global
                          requirements of the profession by developing competencies based on extensive research
                          on all aspects of education.
                        </Typography>
                      </CardContent>
                    </Item>
                  </Box>
                </Grid>
                <Grid>
                  <Item className='vision-cont' style={{ boxShadow: 'none' }}>
                    <CardContent className='vision'>
                      <Typography className='future'>Our Mission</Typography>
                      <Typography className='plan'>
                        We equip teachers and leaders of schools with the skills and proficiencies required to create
                        meaningful student learning experiences bydeveloping professional expertise founded on
                        scholarly inquiry, design thinking and research.
                      </Typography>
                    </CardContent>
                  </Item>
                </Grid>
              </Stack>
            </Grid>
            <br />
            <Grid className='Chairman'>
              <Stack direction={{ xs: 'column', sm: 'row' }} className='BoxMargin'>

                <Grid className='quotes'>
                  <Item className='Person-quotes'>

                    <CardContent className='quote-content'>
                      <div className='CornerBorder'>
                        <div className='DoubleQuote'>

                          <Typography className='cute-word'>The mediocre teacher tells.The good teacher explains.<br />
                            The superior teacher demonstrates.The great teacher inspires.
                          </Typography>
                          <Typography className='writer-name'>-Wiliiam A. Ward</Typography>
                        </div>
                      </div>
                    </CardContent>

                  </Item>
                </Grid>

              </Stack>
            </Grid>

            <br />
            <Grid className='Chairman'>
              <Stack direction={{ xs: 'column', sm: 'row' }} className='BoxMargin'>
                <Item style={{ padding: '0px', boxShadow: 'none' }} className='descript'>
                  <Grid className='Chairman'>
                    <Stack direction={{ xs: 'column', sm: 'row' }}>
                      <Item className='imge' style={{ boxShadow: 'none' }}>
                        <CardMedia image={require('./image/JSBBuilding.jpg')} className="college-img">
                        </CardMedia>
                      </Item>
                      <Item className='imge-des' style={{ boxShadow: 'none' }}>
                        <Typography className='AboutInstitute'>About Us</Typography>
                        <Typography className='About-des1'><b>Saamarthya Teachers Training Academy of Research (STTAR)</b> is promoted by Orden Technical Services Pvt Ltd (OTSPL) in collaboration with Jaipuria School of Business (JSB). OTSPL is a service-oriented company engaged in the business of providing ERP, Information technology and marketing related services to educational institutions. JSB is a premier Business School of the NCR region, established by Seth Anandram Jaipuria Group of Educational Institutions. <br />
                          The Jaipuria Group has been in the educational landscape of India for the last 75 years.
                        </Typography>
                        <Typography className='About-des2'>It has set up top performing educational institutions in all verticals from KG to PG . The core strength of schools and <br />colleges lies in the quality of teachers who are constantly encouraged and groomed to perform to their highest potential.</Typography>
                      </Item>
                    </Stack>
                  </Grid>
                  <Item className='Adout' style={{ boxShadow: 'none' }}>
                    <Typography className='des-1'>The group has set up an independent Teaching and learning structure which regularly
                      engages with teachers at all levels and guides them in the areas of curriculum progression & alignment, effective teaching
                      strategies, structured digital lesson plans, classroom observation and also identifies specific training needs of individual teachers.
                    </Typography>
                    <Typography className='des-1'> Based upon long years of experience, we have identified some core areas that are in line with the global trends,

                      thus equipping teachers with requisite skills and resourcefulness to faces challenges of the fast paced education world.</Typography>
                  </Item>
                </Item>
              </Stack>
            </Grid>

          </div>
        </Card>
      </Grid>
    </div>
  )
}
export default AboutUs;