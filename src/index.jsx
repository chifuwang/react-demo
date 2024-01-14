import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.less"

const root = ReactDOM.createRoot(document.getElementById('root'));

class Count extends React.Component {
  state = { num: 0 };
  render() {
    let { num } = this.state;
    return <>
      <span>{num}</span>
      <br />
      <button onClick={() => {
        num++;
        this.setState({ 
            num
        });
      }}>Add</button>
    
    </>
  }
}
root.render(
  <Count />
);

