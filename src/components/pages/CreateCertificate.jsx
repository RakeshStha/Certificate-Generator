import React from "react";

const CreateCertificate = () => {
  return (
    <div className="card m-4">
      <div className="card-header">
        <h5 className="p-2">Create Certificate</h5>
      </div>
      <div className="card-body p-4">
        <div className="form-group mb-3">
          <label htmlFor="name" className="mb-2"> Name <span className="text-danger">*</span></label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
            <button className="btn btn-outline-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCertificate;
