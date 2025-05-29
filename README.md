# JEME-Product-Card

This is a test package deployment on NPM

### Emmanuel Martínez

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jeme-product-card';
```

```
<ProductCard
    initialValues={{ count: 6 /* maxCount: 10 */ }}
    product={product}
>
    {({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>
```