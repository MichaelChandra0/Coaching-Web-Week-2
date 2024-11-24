const Klik = (props) => {
  props.nama = document.querySelector("input").value;
  return alert(`Halo ${props.nama}`);
};
const Form = (props) => {
  return (
    <div>
      Masukan Nama
      <input type="text" value={props.nama} />
      <button onClick={Klik}>Submit</button>
    </div>
  );
};

export default Form;
