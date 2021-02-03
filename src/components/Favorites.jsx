import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/Favorites.scss"
import { Button, Modal } from 'react-bootstrap'
import { connect } from "react-redux";
import Job from "./Job";


const mapStateToProps = (state) => state;

class Favorites extends React.Component {
    state = {
        fav: this.props.fav
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({ fav: this.props.fav })
        }
    }
    render() {
        return (
            <>

                <Modal show={this.props.show} onHide={this.props.handleModal} >
                    <Modal.Header closeButton>
                        <Modal.Title className='modal-fav'>Your Favorites</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modal-fav'>
                        {this.state.fav ? this.state.fav.map((job, index) => <Job
                            key={`${index}F`}
                            job={job}
                            showHeart={false}
                        />) : console.log("OK")}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='close-btn' onClick={this.props.handleModal}>
                            Close
						</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default connect(mapStateToProps)(Favorites)
