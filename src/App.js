import { ThemeProvider } from 'styled-components'
import themeDefault from './stories/particles/themeDefault'
import Button from './stories/atoms/button'

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <div className="App">
         <h1>Buttons</h1>
        <Button variant='primary'>Real Basic Button</Button>
        <Button variant='secondary' onClick={() => alert('hello')}>Real Function Button</Button>
        <Button variant='tertiary' href= '/'>Real Linked Button</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
