// ...existing code...
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
  id: number
  image: string
  name: string
  description: string
  rating: number
  tags?: string[]
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  image,
  name,
  description,
  rating,
  tags = []
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

        {/* Link envolve o Button em vez do contrário */}
        <Link to={`/restaurante/${id}`} className="link">
          <Button>Saiba mais</Button>
        </Link>
      </CardBody>
    </CardContainer>
  )
}

export default RestaurantCard
// ...existing code...
