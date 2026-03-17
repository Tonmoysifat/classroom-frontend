import {ListView} from "@/components/refine-ui/views/list-view.tsx";
import {Breadcrumb} from "@/components/refine-ui/layout/breadcrumb.tsx";

const SubjectsList = () => {
  return (
    <ListView>
      <Breadcrumb/>
      <h1 className="page-title">Subjects</h1>
      <div className="intro-row">
        <p>Quick access to essential metrics and management tools.</p>
      </div>
    </ListView>
  )
}
export default SubjectsList
