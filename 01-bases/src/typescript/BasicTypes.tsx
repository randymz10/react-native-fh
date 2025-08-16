export const BasicTypes = () => {
  const name: string = "Randy";
  const age: number = 38;
  const isActive: boolean = true;

  const powers: string[] = ["React", "ReactNative"];

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} - {age} - {isActive ? "Activo" : "No activo"}
      <p>{powers.join(', ')}</p>
    </>
  );
};
