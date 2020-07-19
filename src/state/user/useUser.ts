import { useContext } from "react";
import UserContext from "./context";

function useUser() {
  const context = useContext(UserContext);

  return context;
}

export default useUser;
