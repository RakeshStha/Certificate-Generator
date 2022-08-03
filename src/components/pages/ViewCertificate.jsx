import React from "react";
import Certificate from "../assets/image/certificate.png";

export const ViewCertificate = () => {
  return (
    <div className="text-center">
      <img src={Certificate} alt="Certificate" width={"100%"}/>
      <button className="btn btn-primary w-50 mt-4">Download</button>
    </div>
  );
};
