import styled from '@emotion/styled'
import { AcUnit, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const Header = () => {
  const[open,setOpen]=useState(false)

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  })
  const Search = styled("div")(({theme})=>({
    backgroundColor:'white',
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
  }))
  const Icon =styled("div")(({theme})=>({
    display:'none',
    alignItems:'center',
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
      display:"flex"
    }
  }))
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography varient='h6' sx={{display:{xs:"none", sm:"block"}}}>
          MUI
        </Typography>
        <AcUnit sx={{display:{xs:"block",sm:"none"}}}/>

        <Search>
          <InputBase placeholder="search..."/>
        </Search>
        <Icon>
          <Badge badgeContent={3} color='error'>
            <Notifications/>
          </Badge>
          <Avatar onClick={()=>setOpen(true)}sx={{backgroundColor:"gray"}}>
            N
          </Avatar>
        </Icon>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby='demo-positioned-menu'
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        transformOrigin={{
          vertical:'top',
          horizontal:'left'
        }}
      >
        <MenuItem>Shop</MenuItem>
        <MenuItem>Login</MenuItem>
        <MenuItem>About</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Header
