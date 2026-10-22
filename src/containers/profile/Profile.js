import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource, greeting, isHireable} from "../../portfolio";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const defaultProfile = {
    name: greeting.username,
    bio: "Full Stack Developer | Build Scalable Softwares",
    location: "Rajasthan, India",
    hireable: isHireable ? "Yes" : "No"
  };

  const [prof, setrepo] = useState(defaultProfile);

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            if (response && response.data && response.data.user) {
              setrepo(response.data.user);
            }
          })
          .catch(function (error) {
            console.log("Using default profile info for contact section.");
          });
      };
      getProfileData();
    }
  }, []);

  return (
    <Suspense fallback={renderLoader()}>
      <GithubProfileCard prof={prof} key="profile-card" />
    </Suspense>
  );
}
