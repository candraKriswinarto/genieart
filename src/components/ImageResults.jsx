import ImageCard from "./ImageCard";
import Skeleton from "./Skeleton"

const ImageResults = ({ listImages, isLoading}) => {

  return (
    <div className="container max-w-5xl mx-auto px-2 py-6">
      <div className="grid md:grid-cols-2 gap-4">
        {isLoading ? <Skeleton item={2} /> : listImages.map((image, index) => <ImageCard image={image.url} key={index} />)}
      </div>
    </div>
  )
}

export default ImageResults