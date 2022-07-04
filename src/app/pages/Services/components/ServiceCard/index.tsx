import LineIcon from 'react-lineicons'
import { CardContainer, CardText, CardTitle, ServiceContent, ServiceIcon, ServiceInfo, ServiceNumber } from "./styles"

const ServiceCard = () => {
  return (
    <CardContainer>
      <ServiceIcon>
        <LineIcon name='camera' />
      </ServiceIcon>

      <ServiceContent>
        <ServiceNumber>01.</ServiceNumber>
        
        <ServiceInfo>
          <CardTitle>photography</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit id quisquam non perspiciatis voluptas ipsum quae optio distinctio dolores! Hic modi voluptatum provident repudiandae fuga quos consequuntur inventore? Tenetur, quasi.</CardText>
        </ServiceInfo>
      </ServiceContent>
    </CardContainer>
  )
}

export default ServiceCard
