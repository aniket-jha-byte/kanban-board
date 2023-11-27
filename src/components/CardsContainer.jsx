import { useState, useEffect } from "react";
import { useMyContext } from "./save";
import styled from "styled-components";

import Column from "./Columns";

import { fetchInfo } from "./fetchapi";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  padding: 0 30px;
  gap: 30px;
`;

const CardsContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      await fetchInfo()
        .then((res) => {
          setData(res);
        })
        .catch((err) => console.log(err));
    };

    getInfo();
  }, []);


//for dynamic status i.e changes are adjusted accordingly
  const getUniqueStatus = (tickets) => {
    const result = new Set();
    for (let ticket of data.tickets) {
      result.add(ticket.status);
    }

    return Array.from(result);
  };


  const {groupBy} = useMyContext();

  const status = data && data.tickets && getUniqueStatus(data.tickets);

  const priority = [0, 1, 2, 3, 4];

  return (
    <Container>
      {groupBy === "status" && status
        ? status.map((currStatus) => (
            <Column heading={currStatus} data={data} key={currStatus} />
          ))
        : groupBy === "priority" && priority
        ? priority.map((currPriority) => (
            <Column heading={currPriority} data={data} key={currPriority} />
          ))
        : data?.users &&
          data?.users.map((user) => (
            <Column heading={user.id} data={data} key={user.name} />
          ))}
    </Container>
  );
};

export default CardsContainer;