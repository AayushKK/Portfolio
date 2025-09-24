import { useParams } from "react-router";

import data from "../data/data";

const Myprojectsdetails = () => {
  const { id } = useParams();
  console.log(id);
  console.log(data.projects[id]);
  return (
    <div>Myprojectsdetails page {id}
      <h1 className="text-3xl font-bold mb-4">{data.projects[id].title}</h1>

      <p className="mb-2"><strong>Stack:</strong> {data.projects[id].stack}</p>
    </div>
  )
}
export default Myprojectsdetails