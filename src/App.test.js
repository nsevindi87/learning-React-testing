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


?  ======= getByLabelText   getAllByLabelText (label)
<label for="username-input">Username</label>
<input id="username-input" />
const inputNode = screen.getByLabelText("Username")

?  ======= getByPlaceholderText
<input placeholder="Username" />
const inputNode = screen.getbyPlaceholderText("Username")

?  ======= getByText
<a href="/about">About ℹ️</a>
const aboutAnchorNode = screen.getByText(/about/i)

?  ======= getByDisplayValue
<input type="text" id="lastName" />
document.getElementById('lastName').value = 'Norris'

const lastNameInput = screen.getByDisplayValue("Norris")

  !!Semantic Queries
?  ======= getByAltText (img, area, input)
<img alt="Incredibles 2 Poster" src="/incredibles-2.png" />
const incrediblesPosterImg = screen.getByAltText(/incredibles.*? poster/i)


?  ======= getByTitle

  !!Test IDs
?  ======= getByTestId
<div data-testid="custom-element" />

const element = screen.getByTestId('custom-element')

*/

/*
!!TextMatch 
* getByText("Hello world!")
* getByText("ello wor", {exact: false})
* getByText(/world/i)
* getByText(/Hello W?oRld/i)  ==> It`s not sure whether W should be.
* There is enother option to choose text. With Funtion
*/

/* 
 test("test explanation",()=>{
  render(<ComponentName/>);
  const listItem = screen.getAllByRole("listitem")
  expect(listItem).toHaveLength(3)
  expect(listItem.length).toBe(3)
  expect(listItem).toEqual(3)
 })
 for more expect list check out https://jestjs.io/docs/expect
 expect(listItem.textContent)...
*/