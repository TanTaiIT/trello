import './App.scss';
import React from 'react'
import Topbar from 'components/topbar/Topbar'
import Appbar from 'components/appbar/Appbar'
import Content from 'components/content/Content'
function App() {
  return (
    <div className="App">
      <Topbar />
      <Appbar />
      <Content />
    </div>
  );
}

export default App;
