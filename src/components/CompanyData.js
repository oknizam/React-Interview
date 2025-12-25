import { COMPANIES } from "../utils/constants";
import VirtualList from "./UI/VirtualList";

const CompanyData = () => {
  return (
    <>
      <h4>Company data with vrtualization (react window)</h4>
      <VirtualList data={COMPANIES} />
    </>
  )

}

export default CompanyData;

