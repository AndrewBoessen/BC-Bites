import { ThemeProvider, createTheme } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './pages/Menus'

const Stack = createNativeStackNavigator();

const BCRed = '#8a100b';
const BCGold = '#b29d6c';

const theme = createTheme({
  colors: {
    primary: BCRed,
    secondary: BCGold,
  },
  components: {
    Button: {
      size: 'sm',
      raised: false,
      radius: 5,
      containerStyle: {
        marginVertical: 10,
        marginHorizontal: 5,
      },
    },
    Header: {alignItems: 'center',   width: '100%',
        paddingVertical: 10,
    },
    Text: {
      style:{
        fontFamily: Platform.OS === 'ios' ? 'System' : '',
      },
      h2Style: {
        color: 'black',
        fontSize: 25
      },
      h3Style: {
        color: 'white',
        fontSize: 22,
      },
      h4Style: {
        color: 'black',
        fontSize: 15,
      }
    },
    Icon: {
      color: 'white',
    },
    Chip: {
      radius: 15,
      containerStyle: {
        marginVertical: 10,
        marginHorizontal: 5,
      },
      buttonStyle: {
        height: 35,
        width: 100,
      },
      titleStyle: {
        fontFamily: Platform.OS === 'ios' ? 'System' : '',
      }
    },
    Divider: {
      color: BCRed,
      width: 3,
      orientation: 'horizontal',
    },
    Card: {
      containerStyle: {
        borderRadius: 15,
        flex: 1,
      },
    },
    CardTitle: {
      style:{
        fontFamily: Platform.OS === 'ios' ? 'System' : '',
      },
    },
    Image: {
      containerStyle:{
        width: 80,
        height: 80,
        marginHorizontal: 10,
      }
    }
  },
});

// Your App
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown : false}}
        >
          <Stack.Screen name = "Menus" component = {MainPage} options = {{animation : 'fade'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;