import { Link } from "react-router-dom"
import { BrandWrapper, StyledLogo } from "./styles"

const Brand = () => {
  return (
      <BrandWrapper>
        <Link to='/'>
          <StyledLogo />
        </Link>
      </BrandWrapper>
  )
}

export default Brand
