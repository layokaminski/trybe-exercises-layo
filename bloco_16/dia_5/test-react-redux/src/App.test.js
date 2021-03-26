import React from 'react'
import { cleanup } from '@testing-library/react';
import App from './App';
import renderWithRedux from './tests/renderWithRedux';
import userEvent from '@testing-library/user-event';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    const buttonAdicionar = queryByText('Clique aqui');
    userEvent.click(buttonAdicionar);

    expect(queryByText('1')).toBeInTheDocument();
  });
});
