import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { initializeIcons } from "@uifabric/icons";

import { initializeFeatures } from "utils/featureFlags";
import { registerCustomIcons } from "utils/icons";
import { usePrefetchContent } from "utils/requests";
import AccountSurvey from "pages/AccountSurvey";
import Applications from "pages/Applications";
import News from "pages/News";
import Library from "pages/Library";
import Governance from "pages/Governance";
import Collection from "pages/Collection";
import Catalog from "./pages/Catalog2";
import CatalogGroup from "pages/CatalogGroup";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Terms from "pages/Terms";
import Layout from "./components/Layout";
import StorageCollectionDetail from "pages/StorageCollectionDetail";
import Community from "pages/Community";

const Explore = React.lazy(() => import("pages/Explore"));
const Docs = React.lazy(() => import("pages/Docs/Docs.index"));

function App() {
  initializeIcons(undefined, { disableWarnings: true });
  registerCustomIcons();
  initializeFeatures();
  usePrefetchContent();

  const pageFallback = (
    <Layout onGrid={false} isShort={true} allowAnnouncement={false}></Layout>
  );

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route
            path="/docs/*"
            element={
              <Suspense fallback={pageFallback}>
                <Docs />
              </Suspense>
            }
          />
          <Route path="/applications" element={<Applications />} />
          <Route path="/news" element={<News />} />
          <Route path="/library" element={<Library />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/community" element={<Community />} />
          <Route path="/dataset/group/:groupId" element={<CatalogGroup />} />
          <Route path="/dataset/storage/:id" element={<StorageCollectionDetail />} />
          <Route path="/dataset/:id" element={<Collection />} />
          <Route path="/account/request" element={<AccountSurvey />} />
          <Route
            path="/explore"
            element={
              <Suspense fallback={pageFallback}>
                <Explore />
              </Suspense>
            }
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
