import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgCard from "../components/Card";
import { getImage } from "../utils/getImage.js";
/**
* @author traj3ctory
* @function Dashboard
**/

const url = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS}`;

const Dashboard = (props) => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const getImage = async () => {
        try {
            setLoading(true);
            const resp = await axios.get(url);
            setImage(resp.data);
        } catch (error) {
            console.log("error =>", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getImage();
        return () => {
            // cleanup
        };
    }, []);


    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    {!loading && image !== null && image.map((item) => {
                        return <Col lg={3} md={4} sm={6} key={item.id} className="mb-4">
                            <ImgCard img={item} />
                        </Col>
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;