import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SalesOverview from "./components/SalesOverview";
import OverviewWidget from "./components/OverviewWidget";
import FeaturedListings from "./components/FeaturedListings";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />

      <main className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Welcome, Ahmed
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SalesOverview />
          <div className="lg:col-span-1 space-y-6">
            <OverviewWidget
              title="Listings Overview"
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              }
              metrics={[
                { label: "Total", value: "1.8k" },
                { label: "Active", value: "80" },
                { label: "Archived", value: "1k" },
              ]}
            />

            <OverviewWidget
              title="Users Overview"
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
              metrics={[
                { label: "Total", value: "20.7k" },
                { label: "Riders", value: "8.5k" },
                { label: "Subscribers", value: "7.5k" },
              ]}
            />
          </div>
        </div>

        <FeaturedListings />
      </main>
    </div>
  );
}
