import { BrowserRouter, Route, Routes, Navigate } from "react-router"

// routes
import ProtectedRoute from "./routes/ProtectedRoute"
import PublicRoute from "./routes/PublicRoute"
import Dashboard from "./layouts/Dashboard"

// pages
import { HelpCenter, Inventory, Login, Overview, Report, Sales, Settings } from "./pages"
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <BrowserRouter>
    {/* toast notification handler component */}
      <Toaster position="top-right" />

      <Routes>

        {/* index page */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<Dashboard />}>

            <Route index element={<Overview />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/report" element={<Report />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App