import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;


// ==============================================
// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="new-todo">
//             What needs to be done?
//           </label>
//           <input
//             id="new-todo"
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button>
//             Add #{this.state.items.length + 1}
//           </button>
//         </form>
//       </div>
//     );
//   }

//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (!this.state.text.length) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState(state => ({
//       items: state.items.concat(newItem),
//       text: ''
//     }));
//   }
// }

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// ReactDOM.render(<TodoApp />, mountNode);
// export default TodoApp;
