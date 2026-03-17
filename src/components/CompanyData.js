import { COMPANIES } from "../utils/constants";
import CustomVirtualList from "./UI/CustomVitualList";
import VirtualList from "./UI/VirtualList";

const CompanyData = () => {
  return (
    <>
      <h4>Company data with virtualization (react window)</h4>
      <VirtualList data={COMPANIES} />


      <h4>Company data with custom virtualization </h4>
      <CustomVirtualList items={COMPANIES} />
    </>
  )

}

export default CompanyData;

