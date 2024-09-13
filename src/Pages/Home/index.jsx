import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./components/form";
import DataTable from "./components/dataTable";

function index() {

  return (
    <div>
      <Form />
      <DataTable />
      
    </div>
  );
}

export default index;
