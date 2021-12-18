import Button from "./Button";
const Header = (props) => {
  const onClick = () => {};
  return (
    <header className="header">
      <h2>{props.title}</h2>
      <Button text="Add" onClick={onClick} />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker"
};
export default Header;
