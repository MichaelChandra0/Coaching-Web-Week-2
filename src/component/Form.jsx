const Klik = (props) => {
  props.nama = document.querySelector("input").value;
  return alert(`Halo ${props.nama}`);
};
const Form = () => {
  return (
    <div>
      Masukan Nama
      <input type="text" />
      <button onClick={Klik}>Submit</button>
    </div>
  );
};

export default Form;
