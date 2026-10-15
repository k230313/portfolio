import { createElement } from "react";
import { createBrowserRouter, Navigate, useParams } from "react-router";
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
import NotFoundPage from "./pages/NotFoundPage";

function WriteupsToLabsRedirect() {
  const { slug } = useParams();
  return createElement(Navigate, {
    to: slug ? `/labs/${slug}` : "/labs",
    replace: true,
  });
}

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
      { path: "labs", Component: WriteupsPage },
      { path: "labs/:slug", Component: WriteupDetailPage },
      { path: "writeups", Component: WriteupsToLabsRedirect },
      { path: "writeups/:slug", Component: WriteupsToLabsRedirect },
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogEssayPage },
      { path: "tags/:tag", Component: TagPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
