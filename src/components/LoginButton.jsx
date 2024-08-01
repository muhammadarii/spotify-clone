import { useEffect, useState, useMemo } from "react";

const getHashParams = () => {
  const hashParams = new URLSearchParams(window.location.hash.substring(1));
  const params = {};
  for (const [key, value] of hashParams.entries()) {
    params[key] = value;
  }
  return params;
};

const LoginButton = () => {
  const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const scope = "user-read-currently-playing";
  const redirect_uri = "http://localhost:3000";
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token") || null
  );

  useEffect(() => {
    const params = getHashParams();
    const token = params.access_token;

    if (token) {
      setAccessToken(token);
      localStorage.setItem("access_token", token);
      window.history.pushState({}, document.title, "/"); // Remove access_token from URL
    } else {
      const storedToken = localStorage.getItem("access_token");
      if (storedToken) {
        setAccessToken(storedToken);
      } else {
        localStorage.removeItem("access_token");
      }
    }
  }, []);

  const spotify_url = useMemo(() => {
    return client_id
      ? `https://accounts.spotify.com/authorize?client_id=${encodeURIComponent(
          client_id
        )}&response_type=token&redirect_uri=${encodeURIComponent(
          redirect_uri
        )}&scope=${encodeURIComponent(scope)}`
      : "#";
  }, [client_id, redirect_uri, scope]);

  const handleLogout = () => {
    setAccessToken(null);
    localStorage.removeItem("access_token");
  };

  return (
    <div>
      {accessToken ? (
        <button
          onClick={handleLogout}
          className="text-black text-xs font-bold bg-green-500 px-3 py-1 rounded-full"
        >
          Log out
        </button>
      ) : (
        <a href={spotify_url}>
          <button className="text-black text-xs font-bold bg-green-500 px-3 py-1 rounded-full">
            Log in
          </button>
        </a>
      )}
    </div>
  );
};

export default LoginButton;
