export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-3">
          <a
            href="/admin"
            className="block px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            Dashboard
          </a>
          <a
            href="/admin/products"
            className="block px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            Products
          </a>
          <a
            href="/admin/users"
            className="block px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            Users
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  )
}
