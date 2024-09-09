import styled from 'styled-components';

// Wrapper para la página
const PageWrapper = styled.div`
  background-color: hsl(30, 38%, 92%);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
`;

// Card principal
const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  display: flex;
  max-width: 600px;
  width: 80%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  @media (max-width: 375px) {
    width: 100%;
    flex-direction: column; /* Apila la imagen y detalles verticalmente */
    height: auto; /* Asegura que la altura del contenedor se ajuste automáticamente */
  
  }
`;

// Imagen de producto
const ProductImage = styled.img`
  width: 50%;
  object-fit: cover;
  @media (max-width: 375px) {
    position:relative;
    top:20px;
    width: auto; /* Imagen ocupa todo el ancho */
    height: auto; /* Limitar la altura */
    object-fit: contain; /* Ajustar la imagen sin recortar */
    content: url('/image-product-mobile.jpg'); /* Cambiar la imagen */
  }
`;

// Contenedor de detalles del producto
const ProductDetails = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  @media (max-width: 375px) {
    padding: 1rem;
  }
`;

// Título del producto pequeño
const ProductPerfume = styled.h1`
  font-family: 'Montserrat', serif;
  color: hsl(228, 12%, 48%);
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  @media (max-width: 375px) {
    font-size: 0.75rem; /* Reducir el tamaño en pantallas pequeñas */
  }
`;

// Título principal del producto
const ProductTitle = styled.h1`
  font-family: 'Fraunces', serif;
  color: hsl(212, 21%, 14%);
  font-size: 2.2rem;
  margin: 0 0 1rem;
  @media (max-width: 375px) {
    font-size: 1.5rem; /* Reducir tamaño del título */
    margin-bottom: 0.75rem;
  }
`;

// Descripción del producto
const ProductDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: hsl(228, 12%, 48%);
  font-size: 14px;
  line-height: 1.6;
  padding-right: 1rem;
  margin-bottom: 1.5rem;
  @media (max-width: 375px) {
    font-size: 12px; /* Reducir el tamaño de la descripción */
    margin-bottom: 1rem;
  }
`;

// Contenedor para ambos precios
const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem; /* Espaciado entre los precios */
  margin-bottom: 1rem;
  @media (max-width: 375px) {
    gap: 0.5rem; /* Ajustar el espaciado entre los precios */
  }
`;

// Precio con descuento
const ProductPrice = styled.p`
  font-family: 'Fraunces', serif;
  color: hsl(158, 36%, 37%);
  font-size: 2rem; /* Ajusta el tamaño según la imagen */
  font-weight: bold;
  margin: 0;
  @media (max-width: 375px) {
    font-size: 1.5rem; /* Reducir tamaño del precio en pantallas pequeñas */
  }
`;

// Precio original (tachado)
const OriginalPrice = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: hsl(228, 12%, 48%);
  font-size: 0.875rem; /* Tamaño más pequeño */
  text-decoration: line-through; /* Tachado */
  margin: 0;
  position: relative;
  top: -10px;
  @media (max-width: 375px) {
    font-size: 0.75rem; /* Reducir tamaño del precio original */
  }
`;

// Botón "Add to cart"
const AddToCartButton = styled.button`
  background-color: hsl(158, 36%, 37%);
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: hsl(158, 50%, 30%);
  }
  @media (max-width: 375px) {
    font-size: 0.875rem; /* Reducir tamaño del texto en el botón */
    padding: 0.5rem 0.75rem; /* Ajustar el padding */
  }
`;

// Icono del carrito dentro del botón
const CartIcon = styled.img`
  margin-right: 0.5rem;
`;

const ProductCard = () => {
  return (
    <PageWrapper>
      <Card>
        <ProductImage src='/image-product-desktop.jpg' alt='Product Image' />
        <ProductDetails>
          <ProductPerfume>PERFUME</ProductPerfume>
          <ProductTitle>Gabrielle Essence Eau De Parfum</ProductTitle>
          <ProductDescription>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </ProductDescription>
          <PriceWrapper>
            <ProductPrice>$149.99</ProductPrice>
            <OriginalPrice>$169.99</OriginalPrice>
          </PriceWrapper>
          <AddToCartButton>
            <CartIcon src='/icon-cart.svg' alt='Cart Icon' />
            Add to Cart
          </AddToCartButton>
        </ProductDetails>
      </Card>
    </PageWrapper>
  );
};

export default ProductCard;
