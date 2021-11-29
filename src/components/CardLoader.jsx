import Card from 'react-bootstrap/Card';
import { FaHeart } from 'react-icons/fa'
    ;
/**
* @author traj3ctory
* @function CardLoader
**/

const CardLoader = ({ showLoader }) => {
    return (
        <>
            {!showLoader && <Card className="loading shadow-sm">
                <Card.Body>
                    <div className="card-skeleton">
                        <div className="card-skeleton-img"></div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <div className="card-skeleton">
                        <div className="animated-background">
                            <FaHeart className="text-danger" />
                        </div>
                    </div>
                </Card.Footer>
            </Card>}
        </>
    )
}

export default CardLoader;