import { ThemeProvider, Button, createTheme } from '@rneui/themed';
import HomePage from './pages/Home.js'

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});

// Your App
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
  );
};

export default App;