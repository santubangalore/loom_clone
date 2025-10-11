
export type SharedHeaderType = {
    subheader: string,
    title: string,
    userImg: string
}

const Header = ({subheader, title, userImg}: SharedHeaderType) => {
  return (
    <div>Header</div>
  )
}
export default Header