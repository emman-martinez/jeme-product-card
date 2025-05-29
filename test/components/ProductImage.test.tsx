import React from 'react';
import { render } from '@testing-library/react';
import { ProductImage, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductImage', () => {
  test('It should render the component correctly with the custom image', () => {
    const { asFragment } = render(
      <ProductImage
        img="https://example.com/image.jpg"
        className="custom-class"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should be show the component with the product image', () => {
    const { asFragment } = render(
      <ProductCard product={product1}>
        {() => <ProductImage className="custom-class" />}
      </ProductCard>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
