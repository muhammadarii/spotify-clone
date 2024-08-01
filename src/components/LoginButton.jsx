import { useEffect, useState } from "react";

const LoginButton = () => {
  const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const scope = "user-read-currently-playing";
  const redirect_uri = "http://localhost:3000";
  const [accessToken, setAccessToken] = useState(null);

  function getHashParams() {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  useEffect(() => {
    const params = getHashParams();
    const token = params.access_token;

    if (token) {
      setAccessToken(token);
      localStorage.setItem("access_token", token);
    } else {
      // Optionally clear token from localStorage if it's not present
      localStorage.removeItem("access_token");
    }
  }, []);

  const spotify_url = `https://accounts.spotify.com/authorize?client_id=${encodeURIComponent(
    client_id
  )}&response_type=token&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}&scope=${encodeURIComponent(scope)}`;

  // console.log("Access Token:", accessToken);

  return (
    <div>
      <a href={spotify_url}>
        <button className="text-black text-xs font-bold bg-white px-3 py-1 rounded-full">
          Log in
        </button>
      </a>
    </div>
  );
};

export default LoginButton;
