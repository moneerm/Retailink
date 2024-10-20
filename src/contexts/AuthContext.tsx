import React, { createContext, useState, useContext, useEffect } from 'react';

type UserRole = 'brand_admin' | 'brand_user' | 'store_admin' | 'store_user' | 'admin';

type User = {
  id: string;
  email: string;
  role: UserRole;
  organizationId: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, role: UserRole, organizationId: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users
const demoUsers = [
  { id: '1', email: 'brand@example.com', password: 'password123', role: 'brand_admin' as UserRole, organizationId: '1' },
  { id: '2', email: 'test3@gmail.com', password: 'storepass456', role: 'store_admin' as UserRole, organizationId: '2' },
  { id: '3', email: 'testbrand@gmail.com', password: 'brandpass789', role: 'brand_admin' as UserRole, organizationId: '3' },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Find the user in our demo users
    const foundUser = demoUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (email: string, password: string, role: UserRole, organizationId: string) => {
    // In a real app, you would send this data to your backend
    // For demo purposes, we'll just create a new user object
    const newUser = { id: String(demoUsers.length + 1), email, role, organizationId };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};