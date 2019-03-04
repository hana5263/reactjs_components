import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

class CommentForm extends Component {
   constructor(props) {
        super(props);
    
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
         this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <input type="number" id="rating" name="rating" size="50" min="1" max="5"
                                    innerRef={(input) => this.rating = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="yourname">Your Name</Label>
                                <Input type="text" id="yourname" name="yourname"
                                    innerRef={(input) => this.yourname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="textarea" id="comment" name="comment" rows="12"
                                    innerRef={(input) => this.comment = input} />
                            </FormGroup>
                            <Button type="submit" value="Submit" color="primary">Submit</Button>
                        </Form>                    
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;