import { Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const Item = () => {
  return (
    <Card sx={{margin:3}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor:"red"}}>R</Avatar>
        }
        action={
          <IconButton>
            <MoreVert/>
          </IconButton>
        }
        title="Today is minji's birthday"
        subheader="Feb 19, 2023"
      />
      <CardMedia
        component='img'
        height='194'
        image='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMjVfMjMy%2FMDAxNjc0NjI2MDIxNjUz.SwOTi7Oto-qjM8RbcNsnjiWbjCfw4Gc1aYjEs3d5wqkg.Who_uCjXXe0pvbaELS2c4SnBRhMTdKEzul1_8T2GFUAg.JPEG.ooxzx%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5_%252815%2529.jpg&type=sc960_832'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum metus at consequat faucibus. Donec luctus, ipsum vitae volutpat ullamcorper, nisl ipsum porttitor lectus, et hendrerit lorem quam a orci. Curabitur a dui a arcu hendrerit hendrerit eu sit amet turpis. Fusce in ornare eros. Aenean mollis nisi eget scelerisque varius. Ut posuere purus eu vehicula gravida. Suspendisse fringilla turpis a lorem scelerisque mattis. Nam et consequat urna, quis tincidunt arcu. Ut eleifend laoreet varius. Morbi condimentum tristique ex, vitae elementum dui cursus sed. Phasellus auctor sem sed sollicitudin rutrum. Morbi consectetur porttitor orci, vitae porttitor nibh feugiat cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Favorite/>
        </IconButton>
        <IconButton>
          <Share/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Item
