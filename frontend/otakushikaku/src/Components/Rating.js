import StarRatings from 'react-star-ratings'

export default function Rating(props){
    return (
        <div>
          <StarRatings
          rating={props.rating}
          starRatedColor="#cf0082"
          numberOfStars={5}
          name='rating'
          starDimension={props.dimension}
        />
        </div>
      );
}