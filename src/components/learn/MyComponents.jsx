import './style.css';
const MyComponent = () => {
  // const name = "Quang Toản"
  // const age = 25
  // const array = [1, 2,3,4];
  const ob = {
    name: 'Quang Toản',
    age: 25,
    address: 'Hà Nội',
  }
  return (
    <>
      <h2 className='child'> {ob.name}</h2>
      <h2 className='child'> {JSON.stringify(ob)}</h2>

    </>
  );
}
export default MyComponent;