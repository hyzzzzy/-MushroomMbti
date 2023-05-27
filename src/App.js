import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import MainPage from "./pages/MainPage";
import Testpage from "./pages/TestPage";
import Resultpage from "./pages/ResultPage";
import Totalpage from "./pages/TotalPage";

function App() {
  const [EI, setEI] = useState(0);
  const [SN, setSN] = useState(0);
  const [TF, setTF] = useState(0);
  const [JP, setJP] = useState(0);
  const [datas, setDatas] = useState();
  const [MBTI, setMBTI] = useState();

  useEffect(() => {
    let data = [];

    EI > 0 ? data.push("E") : data.push("I");
    SN > 0 ? data.push("S") : data.push("N");
    TF > 0 ? data.push("T") : data.push("F");
    JP > 0 ? data.push("J") : data.push("P");
    
    setDatas(data.join(""));
    setMBTI(datas);
  }, [EI, SN, TF, JP, datas]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage setEI={setEI} setSN={setSN} setTF={setTF} setJP={setJP} />
          }
        ></Route>
        <Route
          path="/test"
          element={
            <Testpage
              EI={EI}
              SN={SN}
              TF={TF}
              JP={JP}
              setEI={setEI}
              setSN={setSN}
              setTF={setTF}
              setJP={setJP}
            />
          }
        ></Route>
        <Route path="/result" element={<Resultpage MBTI={MBTI} />}></Route>
        <Route path="/total" element={<Totalpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
