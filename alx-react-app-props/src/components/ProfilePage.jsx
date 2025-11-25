import { useContext } from "react";
import UserContext from "./UserContext";

function ProfilePage() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default ProfilePage;
