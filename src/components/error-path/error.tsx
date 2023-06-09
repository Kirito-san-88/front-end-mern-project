import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { StyledLink, LoadingMessage } from '../../styles/StyledLinks';

const ErrorContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorTitle = styled.h1`
  font-weight: 300;
  margin: 150px auto;
`;

const Error = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); // Définir l'état de chargement à true

    const redirectTimeout = setTimeout(() => {
      setIsLoading(false); // Définir l'état de chargement à false après le délai
      navigate('/'); // Redirection vers la page d'accueil
    }, 3000); // Définir le délai en millisecondes (ici, 3 secondes)

    return () => clearTimeout(redirectTimeout); // Nettoyage du timer lors du démontage du composant
  }, [navigate]);

  return (
    <ErrorContainer>
      <ErrorTitle>Oups 🙈 Cette page n'existe pas</ErrorTitle>
      {isLoading ? (
        <LoadingMessage>
          Vous allez être redirigé vers la page d'accueil...
        </LoadingMessage>
      ) : (
        <>
          <StyledLink to="/">Accueil</StyledLink>
        </>
      )}
    </ErrorContainer>
  );
};

export default Error;
