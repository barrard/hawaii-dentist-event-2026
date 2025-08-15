import { useEffect, useState } from 'react';

interface RegistrationData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  registeredAt: string;
  // Add other fields as needed
}

interface PageViewData {
  _id: string;
  url: string;
  timestamp: string;
  ipAddress?: string;
  userAgent?: string;
  userId?: string;
}

const AdminPage = () => {
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [pageViews, setPageViews] = useState<PageViewData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [registrationsRes, pageViewsRes] = await Promise.all([
          fetch('/api/admin/registrations'),
          fetch('/api/admin/pageviews'),
        ]);

        if (!registrationsRes.ok) {
          throw new Error(`HTTP error! status: ${registrationsRes.status} for registrations`);
        }
        if (!pageViewsRes.ok) {
          throw new Error(`HTTP error! status: ${pageViewsRes.status} for page views`);
        }

        const registrationsData = await registrationsRes.json();
        const pageViewsData = await pageViewsRes.json();

        setRegistrations(registrationsData.registrations);
        setPageViews(pageViewsData.pageViews);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-4">Loading admin data...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">Error: ${error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Registrations (${registrations.length})</h2>
        {registrations.length === 0 ? (
          <p>No registrations found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Registered At</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg) => (
                  <tr key={reg._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">${reg.firstName} ${reg.lastName}</td>
                    <td className="py-2 px-4 border-b">${reg.email}</td>
                    <td className="py-2 px-4 border-b">${new Date(reg.registeredAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Page Views (${pageViews.length})</h2>
        {pageViews.length === 0 ? (
          <p>No page views found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">URL</th>
                  <th className="py-2 px-4 border-b">Timestamp</th>
                  <th className="py-2 px-4 border-b">IP Address</th>
                  <th className="py-2 px-4 border-b">User Agent</th>
                  <th className="py-2 px-4 border-b">User ID</th>
                </tr>
              </thead>
              <tbody>
                {pageViews.map((pv) => (
                  <tr key={pv._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">${pv.url}</td>
                    <td className="py-2 px-4 border-b">${new Date(pv.timestamp).toLocaleString()}</td>
                    <td className="py-2 px-4 border-b">${pv.ipAddress || 'N/A'}</td>
                    <td className="py-2 px-4 border-b">${pv.userAgent || 'N/A'}</td>
                    <td className="py-2 px-4 border-b">${pv.userId || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminPage;