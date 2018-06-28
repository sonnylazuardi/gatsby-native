import Index from './pages/index';
import About from './pages/About';
import MyPortfolio from './pages/MyPortfolio';

import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
  Index,
  About,
  MyPortfolio,
}, {
  headerMode: 'screen',
});