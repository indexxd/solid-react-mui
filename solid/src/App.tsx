import { createSignal } from "solid-js";
import { Input } from "./Input";

export default function App() {
  const [form1, setForm1] = createSignal("");
  const [form2, setForm2] = createSignal("");
  const [form3, setForm3] = createSignal("");
  const [form4, setForm4] = createSignal("");
  const [form5, setForm5] = createSignal("");
  const [form6, setForm6] = createSignal("");
  const [form7, setForm7] = createSignal("");
  const [form8, setForm8] = createSignal("");
  const [form9, setForm9] = createSignal("");
  const [form10, setForm10] = createSignal("");
  const [form11, setForm11] = createSignal("");
  const [form12, setForm12] = createSignal("");
  const [form13, setForm13] = createSignal("");

  return (
    <>
      solid
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
