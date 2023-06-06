import { useState } from "react";
import { Input } from "./Input";

function App() {
  const [form1, setForm1] = useState("");
  const [form2, setForm2] = useState("");
  const [form3, setForm3] = useState("");
  const [form4, setForm4] = useState("");
  const [form5, setForm5] = useState("");
  const [form6, setForm6] = useState("");
  const [form7, setForm7] = useState("");
  const [form8, setForm8] = useState("");
  const [form9, setForm9] = useState("");
  const [form10, setForm10] = useState("");
  const [form11, setForm11] = useState("");
  const [form12, setForm12] = useState("");
  const [form13, setForm13] = useState("");

  return (
    <>
      react
      <Input value={form1} onChange={setForm1} /> <br></br>
      <Input value={form2} onChange={setForm2} /> <br></br>
      <Input value={form3} onChange={setForm3} /> <br></br>
      <Input value={form4} onChange={setForm4} /> <br></br>
      <Input value={form5} onChange={setForm5} /> <br></br>
      <Input value={form6} onChange={setForm6} /> <br></br>
      <Input value={form7} onChange={setForm7} /> <br></br>
      <Input value={form8} onChange={setForm8} /> <br></br>
      <Input value={form9} onChange={setForm9} /> <br></br>
      <Input value={form10} onChange={setForm10} /> <br></br>
      <Input value={form11} onChange={setForm11} /> <br></br>
      <Input value={form12} onChange={setForm12} /> <br></br>
      <Input value={form13} onChange={setForm13} /> <br></br>
    </>
  );
}

export default App;
