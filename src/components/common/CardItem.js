import React from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import { Gradient } from 'react-gradient'
import {
  PieChart, Pie, Sector, Cell, ResponsiveContainer,
} from 'recharts';

import { cardItemStyles } from '../../styles/cardItemStyles'


export default function CardItem({title, containerStyle, value=400}) {
  const classes = cardItemStyles()
  const values = data.filter(item => item.value <= value)

  return (
    <Card className={clsx({[classes.card]: !containerStyle, [containerStyle]: containerStyle})}>
      <Gradient gradients={[
                  ['magenta', 'gold'],
                  ['violet', 'royalblue']
                ]}
                property="background"
                angle="90deg"
                transitionType="sequential"
                duration="6000">

        <Typography className={classes.title} color="textPrimary" align='center' gutterBottom>
          {title}
        </Typography>
      </Gradient>

      <Grid container
            className={classes.container}
            alignItems='center'
            spacing={2}>

          <Grid item xs={12} sm={12} md={6} lg={6}>
      <ResponsiveContainer width='100%' aspect={2}>
          <PieChart /*onMouseEnter={this.onPieEnter}*/>
        <Pie
          activeIndex={values.length - 1}
          activeShape={renderActiveShape}
          data={values}
          cx='50%'
          cy='88%'
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
        >
        	{
          	values.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
      </ResponsiveContainer>
          </Grid>

      </Grid>

    </Card>
  )
}

const data = [
  { name: 'DRY', value: 200 },
  { name: 'MID', value: 300 },
  { name: 'WET', value: 400 },
];
const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};
