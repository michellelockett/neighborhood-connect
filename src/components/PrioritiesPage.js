import React, { useEffect, useState } from "react";
import PriorityCard from "./PriorityCard";
import Header from "./Header";
import axios from "axios";
import edit from "../assets/edit.svg";

const PrioritiesPage = ({ orgId }) => {
  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `http://localhost:3000/priorities/orgs/${orgId}`
      );
      setPriorities(res.data.rows);
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
    <Header title={"Priorities"} optionIcon={edit} option={"/addNewEvent"} optionName={"Edit Priorities"}  />
      <div className="prioritiesPage">
        <ul>
          {priorities.map(priority => (
            <li key={priority.id}>
              <PriorityCard
                type={"Priority type will go here"}
                description={priority.description}
                rank={priority.rank}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrioritiesPage;
