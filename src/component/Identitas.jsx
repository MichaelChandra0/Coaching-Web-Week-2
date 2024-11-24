const Identitas = (props) => {
  return (
    <div>
      <h1>Identitas Saya</h1>
      <p>Nama : {props.nama}</p>
      <p>NPM : {props.npm}</p>
      <p>
        Github : <a href="{props.github}">{props.github}</a>
      </p>
    </div>
  );
};

export default Identitas;
