import Card from 'react-bootstrap/Card';

/**
* @author traj3ctory
* @function ImgCard
**/

const ImgCard = (props) => {
    const { urls, id, likes, color, alt_description } = props.img;
    console.log(props.img);
    return (
        <>
            <Card>
                <Card.Body id={id}>
                    <img src={urls.small} alt={alt_description} className="img-fluid" width="30%" />
                </Card.Body>
                <Card.Footer>
                    <h4>{likes},&nbsp;{likes}</h4>
                    <h6>{color}</h6>
                </Card.Footer>
            </Card>
        </>
    )
}

export default ImgCard;