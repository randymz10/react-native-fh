const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

export const BasicFunctions = () => {
  return (
    <>
      <h3>Functions</h3>
      <span>El resultado de sumar {addTwoNumbers(2, 8)}</span>
    </>
  );
};
