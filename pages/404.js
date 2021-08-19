import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    console.log("Use effect ran");
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="notfound">
      <h1>Oops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        <Link href="/">
          <a> Go back to the homepage.</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
