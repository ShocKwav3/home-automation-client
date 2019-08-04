import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import { Gradient } from 'react-gradient'

import { cardItemStyles } from '../../styles/cardItemStyles'


export default function CardItem({children, title, containerStyle, value=400}) {
  const classes = cardItemStyles()


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

      {children}
    </Card>
  )
}