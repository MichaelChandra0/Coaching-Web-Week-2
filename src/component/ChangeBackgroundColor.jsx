const Random = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  let warna = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = warna;
};

const ChangeBackgroundColor = () => {
  return (
    <div>
      <button onClick={Random}>Ganti Warna</button>
    </div>
  );
};
export default ChangeBackgroundColor;
