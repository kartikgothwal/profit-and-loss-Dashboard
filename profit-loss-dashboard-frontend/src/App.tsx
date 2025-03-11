import { Suspense, lazy, JSX } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Layout/LoadingComponent";

const ProfileLossReport = lazy(
  () => import("./components/ui/profit-and-loss-report/ProfileLossReport")
);
const BalanceSheet = lazy(
  () => import("./components/ui/balance-sheet/BalanceSheet")
);

function App(): JSX.Element {
  return (
    <div className="container mx-auto p-4">
      <Router>
        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            <Route path="/" element={<ProfileLossReport />} />
            <Route path="/balance-sheet" element={<BalanceSheet />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
