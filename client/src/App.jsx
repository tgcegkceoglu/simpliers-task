import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './config/routes'

function App() {
  return (
    useRoutes(routes) /// useRoutes fonksiyonu, belirli rotaları kullanarak bir uygulama rotasını oluşturur. O rotanın içeriğini ekrana render eder
  );
}

export default App;