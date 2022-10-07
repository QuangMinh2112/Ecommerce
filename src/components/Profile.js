import ProfileSider from "./profile-components/ProfileSider";
import ProfileHeader from "./profile-components/ProfileHeader";
import ProfileFooter from "./profile-components/ProfileFooter";
import MyProfile from "./profile-components/MyProfile";
import AddressProfile from "./profile-components/AddressProfile";
import Footer from "./Footer";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileSider />
      <ProfileHeader />
      {/* <MyProfile /> */}
      <AddressProfile />
      <ProfileFooter />
      <Footer />
    </div>
  );
};

export default Profile;