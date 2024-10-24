import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

function Consume3() {
  let [user, setuser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/get-all")
    .then((response) => {
      setuser(response.data);
    });
    console.log("user");
  }, []);

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="=col">user_id</th>
            <th scope="=col">user_name</th>
            <th scope="=col">user_password</th>
            <th scope="=col">user_mobile</th>
            <th scope="=col">user_email</th>
          </tr>
        </thead>
        <tbody>
          <Table user={user}></Table>
        </tbody>
      </table>
    </>
  );
}

export default Consume3;
