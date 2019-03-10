import React, { Component } from 'react';
import ColorBox from './components/ColorBox'
import SetColors from './components/SetColors'
import { ColorProvider } from './contexts/color';

class App extends Component {
  render() {
    return (
      <ColorProvider>
        <div>
          <SetColors />
          <ColorBox />
        </div>
      </ColorProvider>
    );
  }
}

export default App;
