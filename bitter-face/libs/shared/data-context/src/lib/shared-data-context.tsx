// import styled from 'styled-components';

// /* eslint-disable-next-line */
// export interface SharedDataContextProps {}

// const StyledSharedDataContext = styled.div`
//   color: pink;
// `;

// export function SharedDataContext(props: SharedDataContextProps) {
//   return (
//     <StyledSharedDataContext>
//       <h1>Welcome to SharedDataContext!</h1>
//     </StyledSharedDataContext>
//   );
// }

// export default SharedDataContext;

// import styled from 'styled-components';
import { createContext, useState } from 'react';
// /* eslint-disable-next-line */
export interface SharedDataContextProps {
    children: JSX.Element;
}
export const DataContext = createContext<Record<string, any>>({});
export function DataProvider({ children }: SharedDataContextProps) {
    const [counter, setCounter] = useState(1);
    return (
        <DataContext.Provider value={{ counter, setCounter }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;