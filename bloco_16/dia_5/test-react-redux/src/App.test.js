import React from 'react'
import { cleanup } from '@testing-library/react';
import App from './App';
import renderWithRedux from './tests/renderWithRedux';

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

    expect(queryByText('5')).toBeInTheDocument();
  });
});
