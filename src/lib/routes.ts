import { getHomeFields, getSlideFields, getAllProjects, getNodeByUri } from "../lib/api";

// templates
import Single from "../components/templates/Single.astro";
import WorkOverview from "../components/templates/WorkOverview.astro";
import WorkDetail from "../components/templates/WorkDetail.astro";
import Archive from "../components/templates/Archive.astro";
import Page from "../components/templates/Page.astro";
import Home from "../components/templates/Home.astro";


export async function getNodeData(slug: string) {
  const data = await getNodeByUri(slug);
  let node = data.nodeByUri;

  //fetch additional fields on the homepage
  if (node.isFrontPage){
    let homeFields = await getHomeFields();
    let slideFields = await getSlideFields();
    node = {...node, ...homeFields.pageBy, ...slideFields}
  }
  // fetch additional fields on the project
  if (node.template?.templateName === "Work"){
    let allProjects = await getAllProjects();
    node = {...node, ...allProjects}
  }
  return node;
}

export function getTemplateByRoute(node: any) {
  switch (node.__typename) {
    case "Post":
      return Single;
    case "Page":
      if (node.isFrontPage) return Home;
      if (node.template?.templateName === "Work") return WorkOverview;
      return Page;
    case "Project":
      return WorkDetail;
    case "Category":
    case "Tag":
      return Archive;
    default:
      return Single;
  }
}