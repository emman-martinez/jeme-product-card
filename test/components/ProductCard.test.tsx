import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductCard', () => {
  test('It should render the component correctly', () => {
    const { asFragment } = render(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should increase the counter', () => {
    const { asFragment, container } = render(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    expect(asFragment()).toMatchSnapshot();

    const initialCount = container.querySelector('span');
    expect(initialCount?.textContent).toBe('0');

    const button = container.querySelector('button');

    fireEvent.click(button!);

    const updatedCount = container.querySelector('span');
    expect(updatedCount?.textContent).toBe('1');
  });
});
