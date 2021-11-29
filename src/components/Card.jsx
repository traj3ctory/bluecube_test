import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardLoader from './CardLoader';
import { FaHeart, FaArrowAltCircleRight } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
    ;
/**
* @author traj3ctory
* @function ImgCard
**/

const ImgCard = (props) => {
    const [loaded, setLoaded] = useState(false);
    const { urls, id, user, likes, links, alt_description } = props.img;
    return (
        <>
            <Card className={`shadow-sm ${loaded ? 'show' : 'hide'}`}>
                <Card.Body id={id}>
                    <img src={urls.small} alt={alt_description} onLoad={() => setLoaded(true)} className="img-fluid" />
                </Card.Body>
                <Card.Footer>
                    {/* <h6><FaHeart className="text-danger" />&nbsp;{likes}<br />Photo&nbsp;by&nbsp;{user.name.split('||')[0]}</h6> */}
                    <h6><FaHeart className="text-danger" />&nbsp;{likes}<br />Photo&nbsp;by&nbsp;{user.first_name}</h6>
                    <small><ImLocation2 />&ensp;{user.location || 'Earth'}</small><br />
                    <small><a className="border-1 border-bottom text-white mt-2" href={links.html} target="_blank" rel="noreferrer">See on Unsplash&ensp;<FaArrowAltCircleRight /></a></small>
                </Card.Footer>
            </Card>
            <CardLoader showLoader={loaded} />
        </>
    )
}

export default ImgCard;