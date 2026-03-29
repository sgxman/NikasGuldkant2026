# Image naming convention (static responsive images)

Use this naming for each product image set:

- `products/<slug>-320.webp`
- `products/<slug>-640.webp`
- `products/<slug>-960.webp`
- `products/<slug>-1280.webp`

Example for one product:

- `products/vintage-champagneglas-320.webp`
- `products/vintage-champagneglas-640.webp`
- `products/vintage-champagneglas-960.webp`
- `products/vintage-champagneglas-1280.webp`

When you add `imageBase` in product data, use only the base part without width/extension:

- `imageBase: "products/vintage-champagneglas"`

The app builds responsive `srcset` automatically from that base name.
