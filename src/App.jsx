import { Routes, Route, Navigate } from 'react-router-dom'
import AuthorizationPage from './pages/AuthorizationPage'
import PrivateRoute from './components/common/PrivateRoute'

// Client Pages
import SchedulePage from './pages/client/SchedulePage'
import ClientProfilePage from './pages/client/ClientProfilePage'

// Master Pages
import BakeSchedulePage from './pages/master/BakeSchedulePage'
import MasterProfilePage from './pages/master/MasterProfilePage'

// Admin Pages
import ListOfAccountsPage from './pages/admin/ListOfAccountsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthorizationPage />} />
      
      {/* Client Routes */}
      <Route path="/client/*" element={<PrivateRoute role="client" />}>
        <Route index element={<Navigate to="schedule" />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="profile" element={<ClientProfilePage />} />
      </Route>

      {/* Master Routes */}
      <Route path="/master/*" element={<PrivateRoute role="master" />}>
        <Route index element={<Navigate to="schedule" />} />
        <Route path="schedule" element={<BakeSchedulePage />} />
        <Route path="profile" element={<MasterProfilePage />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin/*" element={<PrivateRoute role="admin" />}>
        <Route index element={<Navigate to="accounts" />} />
        <Route path="accounts" element={<ListOfAccountsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}