const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredList = todosList.filter(
      each => each.id !== id
    )
    this.setState({
      todosList: filteredList,
    })
  }
  render() {
    const {todosList} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {initialTodosList.map(eachTodo => (
              <TodoItem
                deleteTodo={this.deleteTodo}
                key={eachTodo.id}
                todoDetails={eachTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos