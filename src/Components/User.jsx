import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { UserDropdown } from "./UserDropdown";

const User = () => {
  const { user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center space-x-2 mr-4">
      <img
        onClick={toggleDropdown}
        src={user?.photoURL}
        alt="Image of the user"
        className="lg:h-12 cursor-pointer ml-4 lg:w-12 h-8 w-8 rounded-full object-cover"
      />
      <p className="font-medium dark:text-white text-sm lg:text-lg">
        {user?.displayName}
      </p>
      <UserDropdown
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
    </div>
  );
};

export default User;
