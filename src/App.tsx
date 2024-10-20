import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/public/HomePage';
import LoginPage from './pages/public/LoginPage';
import BrandRegistrationPage from './pages/public/BrandRegistrationPage';
import StoreRegistrationPage from './pages/public/StoreRegistrationPage';
import UnauthorizedPage from './pages/public/UnauthorizedPage';
import BrandDashboard from './pages/brand/BrandDashboard';
import StoreDashboard from './pages/store/StoreDashboard';
import ProductCatalog from './pages/brand/ProductCatalog';
import DigitalShowroom from './pages/brand/DigitalShowroom';
import CreateShowroom from './pages/brand/CreateShowroom';
import LineSheetGenerator from './pages/brand/LineSheetGenerator';
import OrderManagement from './pages/brand/OrderManagement';
import PartnershipRequestsPage from './pages/brand/PartnershipRequestsPage';
import MessagesPage from './pages/shared/MessagesPage';
import UserManagementPage from './pages/shared/UserManagementPage';
import NotificationsPage from './pages/shared/NotificationsPage';
import ProfilePage from './pages/shared/ProfilePage';
import AddProduct from './pages/brand/AddProduct';
import EditProduct from './pages/brand/EditProduct';
import ViewShowroom from './pages/brand/ViewShowroom';
import EditShowroom from './pages/brand/EditShowroom';
import BrandOrderDetails from './pages/brand/BrandOrderDetails';
import ShowroomAnalytics from './pages/brand/ShowroomAnalytics';
import DiscoverBrandsPage from './pages/store/DiscoverBrandsPage';
import BrandEditPage from './pages/brand/BrandEditPage';
import BrandPage from './pages/shared/BrandPage';
import SettingsPage from './pages/shared/SettingsPage';
import AdminDashboard from './pages/admin/AdminDashboard';

const ProtectedRoute: React.FC<{ children: React.ReactNode; allowedRoles?: string[] }> = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

const AppContent: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      {user && <Sidebar />}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={
                user ? (
                  user.role.startsWith('brand') ? <Navigate to="/brand" replace /> :
                  user.role.startsWith('store') ? <Navigate to="/store" replace /> :
                  user.role === 'admin' ? <Navigate to="/admin" replace /> :
                  <HomePage />
                ) : <HomePage />
              } />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register/brand" element={<BrandRegistrationPage />} />
              <Route path="/register/store" element={<StoreRegistrationPage />} />
              <Route path="/unauthorized" element={<UnauthorizedPage />} />
              
              <Route path="/brand" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <BrandDashboard />
                </ProtectedRoute>
              } />
              <Route path="/store" element={
                <ProtectedRoute allowedRoles={['store_admin', 'store_user']}>
                  <StoreDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/brand/catalog" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <ProductCatalog />
                </ProtectedRoute>
              } />
              <Route path="/brand/showroom" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <DigitalShowroom />
                </ProtectedRoute>
              } />
              <Route path="/brand/showroom/create" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <CreateShowroom />
                </ProtectedRoute>
              } />
              <Route path="/brand/showroom/:id" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <ViewShowroom />
                </ProtectedRoute>
              } />
              <Route path="/brand/showroom/edit/:id" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <EditShowroom />
                </ProtectedRoute>
              } />
              <Route path="/brand/line-sheet" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <LineSheetGenerator />
                </ProtectedRoute>
              } />
              <Route path="/brand/orders" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <OrderManagement />
                </ProtectedRoute>
              } />
              <Route path="/brand/order/:id" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <BrandOrderDetails />
                </ProtectedRoute>
              } />
              <Route path="/brand/partnerships" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <PartnershipRequestsPage />
                </ProtectedRoute>
              } />
              <Route path="/messages" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user', 'store_admin', 'store_user']}>
                  <MessagesPage />
                </ProtectedRoute>
              } />
              <Route path="/user-management" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'store_admin']}>
                  <UserManagementPage />
                </ProtectedRoute>
              } />
              <Route path="/notifications" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user', 'store_admin', 'store_user']}>
                  <NotificationsPage />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user', 'store_admin', 'store_user']}>
                  <ProfilePage />
                </ProtectedRoute>
              } />
              <Route path="/brand/product/add" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <AddProduct />
                </ProtectedRoute>
              } />
              <Route path="/brand/product/edit/:id" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <EditProduct />
                </ProtectedRoute>
              } />
              <Route path="/brand/showroom-analytics" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <ShowroomAnalytics />
                </ProtectedRoute>
              } />
              <Route path="/store/discover" element={
                <ProtectedRoute allowedRoles={['store_admin', 'store_user']}>
                  <DiscoverBrandsPage />
                </ProtectedRoute>
              } />
              <Route path="/brand/edit/:id" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user']}>
                  <BrandEditPage />
                </ProtectedRoute>
              } />
              <Route path="/brand/:id" element={<BrandPage />} />
              <Route path="/settings" element={
                <ProtectedRoute allowedRoles={['brand_admin', 'brand_user', 'store_admin', 'store_user', 'admin']}>
                  <SettingsPage />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;