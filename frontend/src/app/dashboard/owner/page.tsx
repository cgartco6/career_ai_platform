export default function OwnerDashboard() {
  return (
    <div className="p-12 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold mb-4">Owner Dashboard</h1>
      <p className="text-xl text-gray-600 mb-12">Full unrestricted access for testing and quality control</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-10 rounded-3xl border">Daily Revenue: R2,850</div>
        <div className="bg-white p-10 rounded-3xl border">Active Users: 87</div>
        <div className="bg-white p-10 rounded-3xl border">Average ATS Score: 84%</div>
      </div>
    </div>
  );
}
