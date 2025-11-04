import { Link } from 'react-router-dom'
import React from 'react'
import {
  CardContainer,
  CardImage,
  TagContainer,
  Tag,
  CardBody,
  TitleRow,
  Title,
  Rating,
  Description,
  Button
} from './style'

interface RestaurantCardProps {
  image: string
  name: string
  description: string
  rating: number
  tags: string[]
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  image,
  name,
  description,
  rating,
  tags
}) => {
  return (
    <CardContainer>
      <div>
        <CardImage src={image} alt={name} />
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
      </div>

      <CardBody>
        <TitleRow>
          <Title>{name}</Title>
          <Rating>{rating.toFixed(1)} ⭐</Rating>
        </TitleRow>
        <Description>{description}</Description>
        <Button>
          <Link to="/loja" className="link">
            Saiba mais
          </Link>
        </Button>
      </CardBody>
    </CardContainer>
  )
}

export default RestaurantCard
