import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { authService } from 'services/authService';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const token = sessionStorage.getItem('authToken');
      if (token) {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setUser({ username: decoded.sub, roles: decoded.roles });
          setIsAuthenticated(true);
        } else {
          sessionStorage.removeItem('authToken');
        }
      }
    } catch (err) {
      console.error('Token inválido no sessionStorage:', err);
      sessionStorage.removeItem('authToken');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (loginData) => {
    const response = await authService.login(loginData);
    const { token } = response;

    sessionStorage.setItem('authToken', token);
    const decoded = jwtDecode(token);
    setUser({ username: decoded.sub, roles: decoded.roles });
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};