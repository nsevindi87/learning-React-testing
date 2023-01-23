import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*
* getBy... getAllBy...
* queryBy...  queryAllBy...
* findBy... findAllBy...
*/

/* 
  !!Queries Accesible to Everyone
?  ======= getByRole





?  ======= getByLabelText   (label)
?  ======= getByPlaceholderText
?  ======= getByText
?  ======= getByDisplayValue

  !!Semantic Queries
?  ======= getByAltText (img, area, input)
?  ======= getByTitle

  !!Test IDs
?  ======= getByTestId
*/

/*
!!TextMatch 
* getByText("Hello world!")
* getByText("ello wor", {exact: false})
* getByText(/world/i)
* getByText(/Hello W?oRld/i)  ==> It`s not sure whether W should be.
* There is enother option to choose text. With Funtion
*/