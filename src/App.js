import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./components/main";
import Testpage from "./components/testpage";
import Resultpage from "./components/resultpage";
import Totalpage from "./components/totalPage";

function App() {
  const [EI, setEI] = useState(0);
  const [SN, setSN] = useState(0);
  const [TF, setTF] = useState(0);
  const [JP, setJP] = useState(0);
  let [datas, setDatas] = useState();
  let [MBTI, setMBTI] = useState();

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
            <Main setEI={setEI} setSN={setSN} setTF={setTF} setJP={setJP} />
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
