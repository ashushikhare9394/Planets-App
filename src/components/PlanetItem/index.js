// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <>
      <h1 className="main-heading">PLANETS</h1>
      <div className="bg-container">
        <img src={imageUrl} alt={`planet ${name}`} className="image" />
        <h1 className="heading">{name}</h1>
        <p className="para">{description}</p>
      </div>
    </>
  )
}
export default PlanetItem
