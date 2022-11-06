
import { DataContext } from '@bitter-face/shared/data-context';
import { useContext } from 'react';
export function App() {
  const { counter, setCounter } = useContext(DataContext);
  return (
    <>
      Remote{' '}
      Shared from remote
      <button onClick={() => setCounter(counter - 1)}>counter {counter}</button>{' '}
    </>
  );
}

export default App;






//original page... must comming everything above to see 
// import styled from 'styled-components';
// import NxWelcome from './nx-welcome';

// const StyledApp = styled.div`
//   // Your style here
// `;

// export function App() {
//   return (
//     <StyledApp>
//       <NxWelcome title="remote" />
//     </StyledApp>
//   );
// }

// export default App;
