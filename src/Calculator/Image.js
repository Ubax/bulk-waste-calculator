export function Image({ src, alt, ...rest }) {
  const processedSrc = src.startsWith("https://")
    ? src
    : `${process.env.PUBLIC_URL}${src}`;
  return <img {...rest} alt={alt} src={processedSrc} />;
}
