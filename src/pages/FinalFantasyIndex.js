import React from 'react'
import { Card, CardBody, CardTitle, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'

const FinalFantasyIndex = ({charProfile}) => {
  return (
    <>
      <div className='index-body'>
        <div className='index-flex-container'>
          {charProfile?.map((character, index) =>
            <div className='character-card' key={index}>
              <Card
                style={{
                  width: '18rem'
                }}
                className='character-card-index'
              >
                <img
                  className='card-index-img'
                  src={ character.image }
                  alt={ character.image_alt }
                />
                <CardBody>
                  <CardTitle className='card-title'>
                    { character.name }
                  </CardTitle>
                  <NavLink to={`/finalfantasyshow/${character.id}`} className="nav-link">
                    <Button>
                      See Profile
                    </Button>
                  </NavLink>
                </CardBody>
              </Card>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FinalFantasyIndex
