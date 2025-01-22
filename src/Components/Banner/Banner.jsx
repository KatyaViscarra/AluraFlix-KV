import React from "react";
import YouTube from "react-youtube";
import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImg,
  BannerTitle,
} from "./Banner.styled";
import banner from "../../assets/banner.png";

const Banner = ({ video }) => {
  const videoOptions = {
    width: "300",
    height: "170",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <BannerContainer>
      {/* Fondo del banner */}
      <BannerBackground src={banner} alt="Banner" />

      {/* Contenido principal del banner */}
      <BannerContent>
        {/* Columna izquierda: Título, descripción y badge */}
        <div style={{ maxWidth: "400px", textAlign: "center" }}>

          {/* Título */}
          <BannerTitle category={video.categoria || "default"}>
            Challenge React
          </BannerTitle>

          {/* Descripción */}
          <BannerDescription>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </BannerDescription>
        </div>

        <BannerImg as="div">
           <YouTube videoId="ov7vA5HFe6w" opts={videoOptions} />
        </BannerImg>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
