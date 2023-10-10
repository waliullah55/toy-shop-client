import { Link } from "react-router-dom";
import logo from "../../assets/Background.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.photoURL);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // toast.success('Log Out success.....')
      })
      .catch((err) => {
        console.error(err);
        // toast.error(err)
      });
  };
  const nevOption = (
    <>
      <li className="text-lg font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg font-semibold">
        <Link to="/allToy">All Toy</Link>
      </li>
      <li className="text-lg font-semibold">
        <Link to="/blog">Blog</Link>
      </li>
      {user ? (
        <>
          <li className="text-lg font-semibold">
            <Link to="/addToy">Add Toy</Link>
          </li>
          <li className="text-lg font-semibold">
            <Link to="/myToys">My Toy</Link>
          </li>
          <li onClick={handleLogOut} className="text-lg font-semibold">
            <Link>Log Out</Link>
          </li>
        </>
      ) : (
        <li className="text-lg font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-gray-50 shadow-xl rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nevOption}
          </ul>
        </div>
        <Link to={"/"} className="flex gap-2 items-center font-bold text-2xl">
          <img className="w-16 h-16" src={logo} alt="" />
          <span>Luky Toys</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nevOption}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img
                className="w-12 h-12 rounded-full ml-2 ring ring-cyan-600 p-1"
                src={user?.photoURL}
              />
            </div>
          </>
        ) : (
          <>
            <div className="avatar">
              <div className="w-12 h-12 rounded-full ring ring-cyan-600 ring-offset-base-100 ring-offset-2 mr-3">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
