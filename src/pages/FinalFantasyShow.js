import React from 'react'
import { Button, Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap'
import { NavLink, useParams } from 'react-router-dom'

const FinalFantasyShow = ({charProfile}) => {

  const { id } = useParams()
  const character = charProfile?.find(character => character.id === +id)

  return (
    <>
      <div className='show-body'>
        <div className='character-card'>
          <Card className="character-card-content">
            <CardImg
              className='card-show-img'
              alt={character.image_alt}
              src={character.image}
            />
            <CardBody>
              <CardTitle className='card-title'>
                {character.name}, {character.age}
              </CardTitle>
              <CardText>
                Interests: {character.interests}
              </CardText>
              <br/>
              <NavLink to={`/finalfantasyedit/${character.id}`} className="nav-link">
                <Button>
                  Edit Profile
                </Button>
              </NavLink>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}

export default FinalFantasyShow
