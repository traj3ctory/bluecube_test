import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import InfiniteScroll from 'react-infinite-scroll-component';
import ImgCard from "../components/Card";
import Header from "../components/layout/Header";
import Loader from "../components/Loader";
// import { getImage } from "../utils/getImage.js";
/**
* @author traj3ctory
* @function Dashboard
**/

const url = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS}`;


const Dashboard = (props) => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    // SearchParams
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);
    const [hasMore] = useState(true);

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

    const handleSearch = async (query) => {
        const searchUrl = `https://api.unsplash.com/search/photos/?query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS}&page=${page}`;
        try {
            setData(null)
            setLoading(true);
            const resp = await axios.get(searchUrl);
            if (data !== null) {
                setData([...data, ...resp.data.results]);
            } else if (data === null) {
                setData([...resp.data.results]);
            }
        } catch (error) {
            console.log("error =>", error);
        } finally {
            setLoading(false);
            setPage(page + 1);
        }
    };

    useEffect(() => {
        let source = axios.CancelToken.source();

        if (query !== "") {
            handleSearch(query);
        } else {
            getImage();
        }

        return function () {
            source.cancel("Cancelling in cleanup");
        };
    }, [query]);


    return (
        <>
            <Header find={handleSearch} searchPhoto={setQuery} />
            <Container fluid className="mt-2">
                {data !== null && (
                    <>
                        <h5 className="d-flex justify-content-end w-100">Search:&ensp;<strong className="text-uppercase"><i>{query}</i></strong></h5>
                        {/* <InfiniteScroll
                            dataLength={data.length}
                            next={handleSearch}
                            hasMore={hasMore}
                            loader={<p>Load more...</p>}
                            endMessage={
                                <p style={{ textAlign: "center" }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                        > */}
                            <Row>
                                {!loading && data.map((item) => {
                                    return <Col lg={3} md={4} sm={6} key={item.id} className="mb-4">
                                        <ImgCard img={item} />
                                    </Col>
                                })}
                            </Row>
                        {/* </InfiniteScroll> */}
                    </>
                )}

                <Row>
                    {!loading && data === null && image !== null && image.map((item) => {
                        return <Col lg={3} md={4} sm={6} key={item.id} className="mb-4">
                            <ImgCard img={item} />
                        </Col>
                    })}
                </Row>

                {loading && <Loader />}
            </Container>
        </>
    )
}

export default Dashboard;