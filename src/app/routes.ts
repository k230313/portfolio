import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import CertificationsPage from "./pages/CertificationsPage";
import StackPage from "./pages/StackPage";
import WriteupsPage from "./pages/WriteupsPage";
import WriteupDetailPage from "./pages/WriteupDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogEssayPage from "./pages/BlogEssayPage";
import TagPage from "./pages/TagPage";
import GalleryPage from "./pages/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "projects", Component: ProjectsPage },
      { path: "projects/:slug", Component: ProjectDetailPage },
      { path: "stack", Component: StackPage },
      { path: "certifications", Component: CertificationsPage },
      { path: "writeups", Component: WriteupsPage },
      { path: "writeups/:slug", Component: WriteupDetailPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogEssayPage },
      { path: "tags/:tag", Component: TagPage },
      { path: "gallery", Component: GalleryPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
