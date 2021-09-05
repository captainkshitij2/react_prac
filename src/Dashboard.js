import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const Dashboard = () => {
  const [lad, setLad] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => setLad(resp.data));
  }, []);

  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>id</td>
              <td>titile</td>
              {lad.map((item, val) => (
                <>
                  <tr>{item.title} </tr>
                  <tr> {item.id} </tr>
                </>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Dashboard;
