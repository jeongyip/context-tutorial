import React, { createContext, Component } from 'react';

//not used because *Provider* was used
const ColorContext = createContext({
  color: 'black',
});

//ColorContext.Provider
class ColorProvider extends Component {
  state = {
    color: 'black',
    subcolor: 'red',
  };

  actions = {
    setColor: color => {
      this.setState({ color });
    },

    setSubcolor: subcolor => {
      this.setState({ subcolor });
    },
  };

  render() {
    const value = {
      state: this.state,
      actions: this.actions,
    };

    return (
      <ColorContext.Provider value={ value }>
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}

//ColorContext.Consumer
const { Consumer : ColorConsumer } = ColorContext;


// ColorProvider 와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

// ColorContext 를 통째로 내보내기
export default ColorContext;
