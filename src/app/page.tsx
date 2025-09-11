export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-green-500"></div>
              <span className="text-2xl font-bold text-slate-900 fruktur-regular">swol</span>
            </div>
           
            <div className="flex items-center space-x-4">
              <button className="text-slate-600 transition-colors hover:text-slate-900">
                Sign In
              </button>
              <button className="rounded-lg bg-slate-900 px-6 py-2 text-white transition-all hover:bg-slate-800">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl fruktur-regular">
              Track Your Fitness
            </h1>
            <p className="text-lg text-slate-600">
              Monitor your weight, workouts, and nutrition in one place
            </p>
          </div>

          {/* Quick Stats Preview */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Current Weight</p>
                  <p className="text-2xl font-bold text-slate-900">165.2 lbs</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Workouts This Week</p>
                  <p className="text-2xl font-bold text-slate-900">4</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Calories Today</p>
                  <p className="text-2xl font-bold text-slate-900">1,847</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
            <h2 className="mb-4 text-xl font-semibold text-slate-900 fruktur-regular">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-slate-700">Logged weight: 165.2 lbs</span>
                </div>
                <span className="text-sm text-slate-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-slate-700">Completed: Upper Body Workout</span>
                </div>
                <span className="text-sm text-slate-500">Yesterday</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span className="text-slate-700">Logged meal: Chicken & Rice</span>
                </div>
                <span className="text-sm text-slate-500">Yesterday</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-gradient-to-r from-blue-500 to-green-500"></div>
              <span className="text-lg font-semibold text-slate-900 fruktur-regular">swol</span>
            </div>
            <p className="text-sm text-slate-500">
              &copy; 2024 Swol. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
