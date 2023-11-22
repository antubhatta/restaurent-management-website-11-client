import { Link } from "react-router-dom";

export const UserDropdown = ({ isDropdownOpen, setIsDropdownOpen }) => {
  const items = [
    {
      label: "My added food",
      path: `/foods/users`,
    },
    {
      label: "Add new food",
      path: "/foods/new",
    },
    {
      label: "My Orders",
      path: "/orders",
    },
  ];

  return (
    <div className="z-50">
      {isDropdownOpen && (
        <div className="z-10 absolute top-24 right-20  py-2 w-[220px] bg-white divide-y divide-gray-100 rounded-md shadow ">
          <ul
            className="py-4 text-sm text-gray-700 "
            aria-labelledby="dropdownHoverButton"
          >
            {items.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 font-medium text-dark-2 cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
