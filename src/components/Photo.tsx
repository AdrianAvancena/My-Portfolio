import React from "react";

interface PhotoProps {
  alt?: string;
  size?: number;
  fillContainer?: boolean;
}

/**
 * Portrait photo for the Home and About sections.
 * The source is the shared public image "My-Picture.jfif".
 * If the real file has not been placed into `public/`, the component
 * renders a plain placeholder label instead of a stock/AI picture.
 */
export const Photo: React.FC<PhotoProps> = ({ 
  alt = "Profile picture", 
  size = 320,
  fillContainer = false 
}) => {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return (
      <div 
        className="photo-fallback" 
        style={{ 
          width: fillContainer ? "100%" : size, 
          height: fillContainer ? "100%" : size,
          minHeight: fillContainer ? "auto" : size
        }} 
      >
        <span className="photo-fallback-ico" />
        <span className="photo-fallback-text">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src="/My-Picture.jfif"
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setFailed(false)}
      onError={() => setFailed(true)}
      className="photo"
      style={fillContainer 
        ? { width: "100%", height: "100%", objectFit: "cover", minHeight: "auto" }
        : { width: size, height: size, objectFit: "cover" }}
    />
  );
};

export const PhotoFallback: React.FC<{ label?: string; size?: number }> = ({ label, size = 320 }) => (
  <div className="photo-fallback" style={{ width: size, height: size }}>
    <span className="photo-fallback-ico" />
    <span className="photo-fallback-text">{label ?? "My Picture"}</span>
  </div>
);
