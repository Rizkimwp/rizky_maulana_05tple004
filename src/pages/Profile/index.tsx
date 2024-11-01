import { Helmet } from "react-helmet";
const Profile: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Profile</title>
        <meta
          name="description"
          content="This is the home page of my website"
        />
      </Helmet>
      <h1>Welcome To Profile</h1>
    </div>
  );
};

export default Profile;
