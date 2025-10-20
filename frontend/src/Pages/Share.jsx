import React from "react";

function Share() {
  const shareData = {
    title: "MDN",
    text: "Learn web development on MDN!",
    url: "https://raviprotifilo.netlify.app/",
  };
  // export default shareData
  const Handelshare = async () => {
    await navigator.share(shareData);
  };
  return (
    <>
      <button className="bg-green-500 text-white cursor-pointer" title="Share" onClick={Handelshare}
>
        Share
      </button>
    </>
  );
}

export default Share;
