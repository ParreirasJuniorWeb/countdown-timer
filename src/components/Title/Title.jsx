import "./Title.css"

const Title = ( { title, colorTheme } ) => {
  return (
    <h1 className="title" style={{color: colorTheme === "#000" ? "#ccc" : colorTheme}}>
      {title}
    </h1>
  )
}

export default Title;