export default props => {
  const { handleChangeCompleted, classNameWord, title, id } = props
  return (
    <li onClick={() => handleChangeCompleted(id)} className={classNameWord}>
      {title}
    </li>
  )
}