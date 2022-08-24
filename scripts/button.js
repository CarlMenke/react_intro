const container = document.getElementById('root')

// class MyButton extends React.Component {
//     constructor() {
//       super()
//       this.state = {
//         counter: 0
//       }
//       this.incrementCounter = this.incrementCounter.bind(this)
//     }
  
//     incrementCounter() {
//       this.setState({ counter: this.state.counter + 1 })
//     }
  
//     render() {
//       return React.createElement(
//         'button',
//         { onClick: this.incrementCounter },
//         this.state.counter
//       )
//     }
//   }
  
//   const ClassButton = React.createElement(MyButton)
  
//   ReactDOM.render(ClassButton, container)

function Button() {
    const [counter, updateCounter] = React.useState(0)
    const handleCounterUpdate = () => {
      updateCounter(counter + 1)
    }
      return React.createElement(
        'button',
        {
          onClick: handleCounterUpdate,
          className: 'my-button'
        },
        counter
      )
  }
  
  const element = React.createElement(Button)
  
  ReactDOM.render(element, container)