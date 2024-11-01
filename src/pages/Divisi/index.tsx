import { Helmet } from "react-helmet";
import HeaderTemplate from "../../components/HeaderTemplate";
import Content from "./content";

const Divisi: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Divisi</title>
        <meta
          name="description"
          content="This is the home page of my website"
        />
      </Helmet>
      <HeaderTemplate title={"Dashboard"} />
      <Content />
    </div>
  );
};

export default Divisi;