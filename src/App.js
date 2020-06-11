import React from 'react';
import WebShopApp from './components/WebShopApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProvider from './components/Context'

class App extends React.Component {
  render () {
  return (
    <div className="App">
      <MyProvider>
<WebShopApp/>
</MyProvider>
    </div>
  );
}
}
export default App;
