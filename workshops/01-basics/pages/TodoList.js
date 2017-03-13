import { TodoItem } from './TodoItem'

export default  props => {
  const { todos, handleChangeCompleted } = props
  const todolist = todos.map(item => {
    return (<TodoItem id={item.id} handleChangeCompleted={handleChangeCompleted} classNameWord={item.completed ? 'completedItem' : ''} title={item.title} />)
  })
  return (
    <ul>
      {todolist}
    </ul>
  )
}