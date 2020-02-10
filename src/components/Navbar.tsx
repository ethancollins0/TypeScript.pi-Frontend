import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

interface Props extends RouteComponentProps<any> {}

const Navbar = (props: Props) => {
  const [cookies, removeCookie] = useCookies(["token"]);

  const logout = () => {
    removeCookie("token", {});
    props.history.push("/authenticate");
  };

  return (
    <nav className="navbar">
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default withRouter(Navbar);
