interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 27,
    firstName: "Randy",
    lastName: "Muñoz",
    address: {
      country: "Brasil",
      houseNo: "155",
    },
  };
  return (
    <>
      <h3>Objetos literales</h3>
      <em>{JSON.stringify(person, null, 2)}</em>
    </>
  );
};
