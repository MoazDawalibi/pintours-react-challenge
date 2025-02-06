"use client";

import { useRouter } from "next/navigation";
import { Button } from "antd";
import { FaArrowRight } from "react-icons/fa6";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="not_found_page">
      <div className="not_found_container">
        <img src="/App/Error.png" alt="Error 404" width={500} />
        <h3>Sorry, something went wrong</h3>
        <p>Sorry, the page you're looking for does not exist</p>
        <Button className="not_found_button" onClick={() => router.push("/")}>
          <FaArrowRight />
          Return to main page
        </Button>
      </div>
    </div>
  );
}
