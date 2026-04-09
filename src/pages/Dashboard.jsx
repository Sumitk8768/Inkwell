import { Outlet, useNavigate } from "react-router";


const Dashboard = () => {

  let navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-10 py-12">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">
              Manage your articles
            </p>
          </div>
          <button
           className="bg-[#0056A4] text-white px-6 py-2 rounded-lg font-medium hover:hover:bg-[#1c7bd4] cursor-pointer transition flex items-center gap-2"
           onClick={()=>navigate('/dashboard/new')}
           >
            <span className="text-xl">+</span> New Article
          </button>
        </div>

        {/* Stats Grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Total Articles Card */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-gray-500 font-medium mb-4 text-sm">
              Total Articles
            </h3>
            <p className="text-5xl font-bold text-black">0</p>
          </div>

          {/* Published Card */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-gray-500 font-medium mb-4 text-sm">
              Published
            </h3>
            <p className="text-5xl font-bold text-green-600">0</p>
          </div>

          {/* Drafts Card */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-gray-500 font-medium mb-4 text-sm">Drafts</h3>
            <p className="text-5xl font-bold text-gray-400">0</p>
          </div>
        </div>

        {/* Articles Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your Articles
          </h2>

          <div className="bg-white border border-gray-200 rounded-xl py-24 flex flex-col items-center justify-center text-center shadow-sm">
            {/* Empty State Icon */}
            <div className="text-gray-400 mb-4">
              <i className="ri-article-line text-6xl"></i>
            </div>

            <h3 className="text-xl font-semibold text-gray-800">
              No articles yet
            </h3>
            <p className="text-gray-500 mb-6">
              Start writing your first article
            </p>

            <button className="bg-[#0056A4] text-white px-8 py-2 rounded-lg font-medium hover:bg-[#1c7bd4] transition flex items-center gap-2 cursor-pointer">
              <span className="text-xl">+</span> Create Article
            </button>
          </div>
        </section>
      </main>
    </div>
  );
  <Outlet />
};

export default Dashboard;
