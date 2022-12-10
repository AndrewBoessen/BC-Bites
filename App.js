import { ThemeProvider, createTheme, useTheme } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import MainPage from './pages/Menus'

const Stack = createNativeStackNavigator();

const BCRed = '#8a100b';
const BCGold = '#b29d6c';

const theme = createTheme({
  colors: {
    primary: BCRed,
    secondary: BCGold,
    darkBackground: '#1E1E1E',
    surface: '#2d2d30',
    onPrimary: '#000000',
    onSecondary: '#000000',
  },
  components: {
    Button: {
      size: 'sm',
      raised: false,
      radius: 15,
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
        fontFamily: 'System',
      },
      h2Style: {
        color: 'white',
        fontSize: 25
      },
      h3Style: {
        color: 'white',
        fontSize: 20,
      },
      h4Style: {
        color: 'white',
        fontSize: 17,
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
        fontFamily: 'System',
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
        width: 200,
        height: 100,
        marginHorizontal: 10,
      }
    }
  },
});

// Your App
const App = () => {

  const [fontsLoaded] = useFonts({
    'Open-Sans': require('./assets/static/OpenSans/OpenSans-Regular.ttf'),
  });

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