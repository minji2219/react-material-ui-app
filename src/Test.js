import styled from '@emotion/styled';
import './App.css';
import Button from '@mui/material/Button'

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button sx={{
        backgroundColor: 'gray',
        color:'white',

      }}>Custom</Button>
      <Button color="secondary">Theme Button</Button>
      <CustomThemeButton>CustomThemeButton</CustomThemeButton>
    </div>
  );
}

export default App;
const CustomThemeButton=styled(Button)(({theme})=>({
  backgroundColor:theme.palette.primary.main
}))

