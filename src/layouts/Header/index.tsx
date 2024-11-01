import Avatar from "react-avatar";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg text-white p-3"
      style={{ background: "rgba(18,105,219,1)" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white ms-2" href="#">
          Universitas Bung Karno
        </a>
        <Avatar name="Foo Bar" size="40" round className="me-2" />
      </div>
    </nav>
  );
};

export default Header;
