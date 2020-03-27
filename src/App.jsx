import React, { useState } from "react";
import AddTextPanel from "./components/addTextPanel/AddTextPanel";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function App() {
  const [tabOfTextareas, setDataOfTextArea] = useState([]);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  console.log(tabOfTextareas);
  return (
    <AppContainer>
      <VideoPlayer
        tabOfTextareas={tabOfTextareas}
        changeDataOfTextArea={e => setDataOfTextArea(e)}
        setCurrentTime={e => setCurrentTime(e)}
        setDuration={e => setDuration(e)}
        duration={duration}
        currentTime={currentTime}
      />
      <AddTextPanel
        tabOfTextareas={tabOfTextareas}
        addTextArea={e => setDataOfTextArea(e)}
        currentTime={currentTime}
      />
    </AppContainer>
  );
}

export default App;
