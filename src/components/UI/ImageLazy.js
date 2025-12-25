
const ImageLazy = ({ url, alt = "image not available" }) => {
  return <img src={url} loading="lazy" alt={alt} />
}

export default ImageLazy;