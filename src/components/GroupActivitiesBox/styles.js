import styled from "styled-components";

export const ActivitiesContainer = styled.section`
  background: var(--green);
  width: 270px;
  height: 210px;
  overflow: auto;
  margin: 10px 0;
  padding: 5px;
  box-shadow: var(--box-shadow);
  min-height: 100px;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--light-green);
    border-radius: 5px;
  }

  .Goal_Activities_container_title {
    color: white;
    margin: 0 5px;
    font-weight: 400;
  }

  .create_Activities {
    position: relative;
    float: right;
    right: 15px;
    top: 18px;
    cursor: pointer;
  }

  .create_Activities_icon {
    color: white;
    width: 30px;
    height: 30px;
  }

  @media (min-width: 769px) {
    width: 220px;
    height: 100px;
    max-height: 210px;
  }

  @media (min-width: 1280px) {
    height: 200px;
  }
`;
