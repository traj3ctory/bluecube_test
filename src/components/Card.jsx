import Card from 'react-bootstrap/Card';
import { FaHeart } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
    ;
/**
* @author traj3ctory
* @function ImgCard
**/

const ImgCard = (props) => {
    const { urls, id, user, likes, alt_description } = props.img;
    return (
        <>
            <Card className="shadow-sm">
                <Card.Body id={id}>
                    <img src={urls.small} alt={alt_description} className="img-fluid" />
                </Card.Body>
                <Card.Footer>
                    <h6><FaHeart className="text-danger" />&nbsp;{likes},&ensp;{user.name.split('||')[0]}</h6>
                   <small><ImLocation2 />&ensp;{user.location || 'Earth'}</small>
                    {/* {user.location && <small><ImLocation2 />{user.location}</small>} */}
                </Card.Footer>
            </Card>
        </>
    )
}

export default ImgCard;