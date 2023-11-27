import styled from "styled-components";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

import { useMyContext } from "./save";

const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: #eee;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const DisplayMenu = styled.form`
  margin: 0 0 0 20px;
  width: 100px;
  height: 28px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 15px;
  background-color: #fff;
  cursor: pointer; 
`;
const Label = styled.label`
  user-select: none; /* Disable text selection */
  -moz-user-select: none; /* For Firefox */
  -webkit-user-select: none; /* For Chrome, Safari, and Opera */
  -ms-user-select: none; /* For Internet Explorer and Edge */
  cursor: pointer;
`;

const DisplaySettings = styled.div`
  height: 90px;
  width: 250px;
  margin: -10px 0 0 20px;
  position: fixed;
  background-color: #eee;
  border-radius: 7px;
  box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  font-weight: 500;
  color: gray;
`;

const Select = styled.select`
  width: 100px;
  border-radius: 3.5px;
`;

const Option = styled.option`
  font-size: 15px;
`;

const Navbar = () => {
  const [showDisplaySettings, setShowDisplaySettings] = useState(false);


  const handleShowDisplaySettings = () => {
    setShowDisplaySettings(!showDisplaySettings);
  };

  const { groupBy, setGroupBy, ordering, setOrdering} = useMyContext();

  const handleGroupByChange = (e)=>{
    setGroupBy(e.target.value);

    if(e.target.value === 'priority') setOrdering('title') ;
  }
  return (
    <>
      <Container>
        <DisplayMenu onClick={handleShowDisplaySettings} >
          <HiOutlineAdjustmentsHorizontal />
          <Label htmlFor="display">Display</Label>
          {showDisplaySettings ? (
            <MdKeyboardArrowUp id="display" />
          ) : (
            <MdKeyboardArrowDown id="display" />
          )}
        </DisplayMenu>
      </Container>

      {showDisplaySettings && 
      <DisplaySettings>
        <Filter>
          <Label>Grouping</Label>
          <Select defaultValue={groupBy} onChange={handleGroupByChange}>
            <Option value="status"> Status </Option>
            <Option value="userId"> User </Option>
            <Option value="priority"> Priority </Option>
          </Select>
        </Filter>
        <Filter>
          <Label>Ordering</Label>
          <Select defaultValue={ordering} onChange={(e)=> setOrdering(e.target.value)}>
            <Option value="priority" disabled={groupBy === 'priority'} > Priority </Option>
            <Option value="title"> Title </Option>
          </Select>
        </Filter>
      </DisplaySettings>}
      
    </>
  );
};

export default Navbar;