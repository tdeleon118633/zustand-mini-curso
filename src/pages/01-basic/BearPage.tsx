import { WhiteCard } from '../../components';
import { userBearsStore } from '../../stores';

export const BearPage = () => {



  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        <BlackBears />
        <PolarBears />
        <PandaBears />
        <BearsDisplay />

      </div>

    </>
  );
};

export const BlackBears = () => {
  const blackBears =  userBearsStore(state => state.blackBears);
  const increaseBlackBears =  userBearsStore(state => state.increaseBlackBears);
  return(
        <WhiteCard centered>
          <h2>Osos Negros</h2>

          <div className="flex flex-col md:flex-row">
            <button onClick={() => increaseBlackBears(+1)}> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
            <button onClick={() => increaseBlackBears(-1)}> -1</button>
          </div>

        </WhiteCard>
  )
}

export const PandaBears = () => {

  const pandaBears =  userBearsStore(state => state.pandaBears);
  const increasePandaBears =  userBearsStore(state => state.increasePandaBears);
  return(
        <WhiteCard centered>
          <h2>Osos Pandas</h2>

          <div className="flex flex-col md:flex-row">
            <button onClick={() => increasePandaBears(+1)}> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
            <button onClick={() => increasePandaBears(-1)}> -1</button>
          </div>

        </WhiteCard>
  )
}

export const PolarBears = () => { 

   const polarBears =  userBearsStore(state => state.polarBears);
  const increasePolarBears =  userBearsStore(state => state.increasePolarBears);
  return(
        <WhiteCard centered>
          <h2>Osos Negros</h2>

          <div className="flex flex-col md:flex-row">
            <button onClick={() => increasePolarBears(+1)}> +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>
            <button onClick={() => increasePolarBears(-1)}> -1</button>
          </div>

        </WhiteCard>
  )

}

export const BearsDisplay = () => {

  const bears = userBearsStore(state => state.bears);
  //const bears = userBearsStore(useShallow(state => state.bears)); // NO VUELVE A RENDERIZAR
  const donNothing = userBearsStore(state => state.donNothing);

  return(
    <WhiteCard centered>
      <h2>Todos los Osos</h2>
      <button onClick={donNothing}>No Hacer Nada</button>
      <ul>
        {bears.map(bear => (
          <li key={bear.id}>{bear.name}</li>
        ))}
      </ul>
    </WhiteCard>
  )
}