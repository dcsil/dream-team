import React from "react";

// reactstrap components
import { FormGroup, Form, Input, Row, Col } from "reactstrap";

class ProfileInformation extends React.Component {

  userInfoData = [
      {
          title: "User information",
          inputs: [
              {
                  name: "Username",
                  id: "input-username",
                  placeholder: "Username",
                  type: "text",
                  size: "6",
                  rows: "1"
              },{
                name: "Email address",
                id: "input-email",
                placeholder: "jesse@example.com",
                type: "email",
                size: "6",
                rows: "1"
            },{
                name: "First name",
                id: "input-first-name",
                placeholder: "First name",
                type: "text",
                size: "6",
                rows: "1"
            },{
                name: "Last name",
                id: "input-first-name",
                placeholder: "Last name",
                type: "text",
                size: "6",
                rows: "1"
            }
          ]
      },
      {
        title: "Contact information",
        inputs: [
            {
            name: "Address",
            id: "input-address",
            placeholder: "Home Address",
            type: "text",
            size: "12"
            },{
              name: "City",
              id: "input-city",
              placeholder: "City",
              type: "text",
              size: "4",
              rows: "1"
          },{
              name: "United States",
              id: "input-country",
              placeholder: "Country",
              type: "text",
              size: "4",
              rows: "1"
          },{
              name: "Postal code",
              id: "input-postal-code",
              placeholder: "Postal code",
              type: "text",
              size: "4",
              rows: "1"
          }
        ]
      },
      {
        title: "About me",
        inputs: [
            {
            name: "About Me",
            id: "input-about",
            placeholder: "A few words about you ...",
            type: "textarea",
            size: "12",
            rows: "4"
            }
        ]
      }
    ]

  userInfoFormMap = (input) => {
      return (
        <Col lg={input.size}>
        <FormGroup>
          <label className="form-control-label" htmlFor={input.id}>
          {input.name}
          </label>
          <Input
            className="form-control-alternative"
            id={input.id}
            placeholder={input.placeholder}
            type={input.type}
            rows={input.rows}
          />
        </FormGroup>
      </Col>
      )
  }


  userInformation = (data) => {
        return (
            <>
            <h6 className="heading-small text-muted mb-4">{data.title}</h6>
            <div className="pl-lg-4">
              <Row>
                {data.inputs.map((input) => this.userInfoFormMap(input))}
              </Row>
            </div>
          </>
        )
  }

  render() {
    return <Form>
    {this.userInformation(this.userInfoData[0])}
    <hr className="my-4" />
    {this.userInformation(this.userInfoData[1])}
    <hr className="my-4" />
    {this.userInformation(this.userInfoData[2])}
  </Form>;
  }
}
export default ProfileInformation;
