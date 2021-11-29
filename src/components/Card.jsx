import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardLoader from './CardLoader';
import { FaHeart } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
    ;
/**
* @author traj3ctory
* @function ImgCard
**/

const ImgCard = (props) => {
    const [loaded, setLoaded] = useState(false);
    console.log(loaded)
    const { urls, id, user, likes, links, alt_description } = props.img;
    return (
        <>
            <Card className={`shadow-sm ${loaded ? 'show' : 'hide'}`}>
                <Card.Body id={id}>
                    <img src={urls.small} alt={alt_description} onLoad={() => setLoaded(true)} className="img-fluid" />
                </Card.Body>
                <Card.Footer>
                    <h6><FaHeart className="text-danger" />&nbsp;{likes}<br />Photo&nbsp;by&nbsp;{user.name.split('||')[0]}</h6>
                    <small><ImLocation2 />&ensp;{user.location || 'Earth'}</small><br />
                    <small><a href={links.html} target="_blank" rel="noreferrer">See on Unsplash</a></small>
                </Card.Footer>
            </Card>
            <CardLoader showLoader={loaded} />
        </>
    )
}

export default ImgCard;