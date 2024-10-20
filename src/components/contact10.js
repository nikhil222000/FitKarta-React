import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text4 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text5 thq-body-large">
                    Have questions or want to book a session? Reach out to us!
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <form className="contact10-form">
            <div className="contact10-container2">
              <div className="contact10-container3">
                <input
                  type="text"
                  id="name"
                  required="true"
                  placeholder="Full Name"
                  className="contact10-textinput1 input"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="contact10-textinput2 input"
                />
                <input
                  type="tel"
                  id="phone"
                  name="Contact No."
                  required="true"
                  placeholder="Contact No."
                  className="contact10-textinput3 input"
                />
              </div>
              <div className="contact10-container4">
                <input
                  type="text"
                  id="description"
                  required="true"
                  placeholder="Please descripe your concern..."
                  className="contact10-textinput4 input"
                />
                <div className="contact10-container5">
                  <button
                    id="submit"
                    className="contact10-action1 thq-button-animated thq-button-filled"
                  >
                    <span>Submit Query</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  heading1: undefined,
  content1: undefined,
}

Contact10.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default Contact10
