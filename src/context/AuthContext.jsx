import { createContext } from "react";

function noop() {}

export const AuthContext = createContext({
  level: null,
  userName: null,
  login: noop,
  isAuthinticated: false,
});
