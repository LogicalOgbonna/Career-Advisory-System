import React, { Component } from "react";
import { connect } from "react-redux";
import { PushSpinner } from "react-spinners-kit";
import propType from "prop-types";

import Nav from "../Nav";
import Footer from "../Footer";
import Card from "../ServiceCard";
import "./Dashboard.css";

import { getProfile, createPropfile } from "../../actions/profile";

const styles = {
  color: "red",
  text: {
    textAlign: "center"
  }
};

class Dashboard extends Component {
  state = {
    hasProfile: false,
    profile: [],
    name: "",
    school: "",
    year: "",
    bio: "",
    errors: {},
    loading: true
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    console.log(nextProps.profile);
    if (nextProps.profile !== null) {
      this.setState({ hasProfile: true, profile: nextProps.data });
    }
  }
  componentDidMount() {
    this.props.getProfile();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = data => {
    const errors = {};
    if (!data.name) errors.name = "Enter Name";
    if (!data.school) errors.school = "Enter School";
    if (!data.year) errors.year = "Enter Year";
    if (!data.bio) errors.bio = "Enter Bio";

    return errors;
  };

  onSubmit = e => {
    const errors = this.validate(this.state);
    this.setState({ errors });
    // console.log(this.state.errors);
    if (Object.keys(errors).length === 0) {
      console.log("create");
      this.props.createPropfile(this.state);
    }
    e.preventDefault();
    // console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <Nav active="dashboard" />

        {this.state.loading ? (
          <div className="col-md-6 offset-4 ">
            <div
              style={{
                marginTop: "50%",
                marginLeft: "auto",
                marginRight: "auto"
              }}
              className="center-spinner"
            >
              <PushSpinner
                size={50}
                color="#686769"
                loading={this.state.loading}
              />
            </div>
          </div>
        ) : (
          <React.Fragment>
            {this.state.hasProfile ? (
              <React.Fragment>
                <div className="dashboard" id="home">
                  <div className="layer">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6 offset-3 banner-text-w3pvt">
                          <h4 className="b-w3ltxt text-capitalize">
                            Know Who You Are
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 offset-1">
                    <Card dashboard={true} />
                  </div>
                </div>
                <Footer isAuthenticated={true} />
              </React.Fragment>
            ) : (
              <form onSubmit={this.onSubmit} className="form-control">
                <div className="row mt-5">
                  <div className="col-md-4 offset-4">
                    <h5 className="mb-3 text-center">Tell Us Abou You</h5>
                    <div className="form-style-w3ls">
                      <input
                        placeholder="Your Name"
                        name="name"
                        type="text"
                        required={true}
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      {this.state.errors.name && (
                        <span style={styles} id="errors">
                          {this.state.errors.name}
                        </span>
                      )}
                      <input
                        placeholder="Your School"
                        name="school"
                        type="text"
                        required={true}
                        value={this.state.school}
                        onChange={this.onChange}
                      />
                      {this.state.errors.school && (
                        <span style={styles} id="errors">
                          {this.state.errors.school}
                        </span>
                      )}
                      <label htmlFor="inputGroupSelect04" className="">
                        Select year of graduation
                      </label>
                      <div className="input-group mb-3">
                        <select
                          onChange={this.onChange}
                          name="year"
                          className="custom-select"
                          id="inputGroupSelect04"
                          value={this.state.year}
                        >
                          <option defaultValue>Choose...</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Your Bio
                        </label>
                        <textarea
                          onChange={this.onChange}
                          placeholder="A little about you..."
                          className="form-control"
                          name="bio"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        />
                      </div>
                      <button className="btn"> Save </button>
                    </div>
                    <h5 className="mb-3 text-center text-muted mt-1">
                      YOUR INFORMATION IN SECURE WITH US
                    </h5>
                  </div>
                </div>
              </form>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

Dashboard.propType = {
  getProfile: propType.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.user.profile,
  profileError: state.user.profileError
});

export default connect(
  mapStateToProps,
  { getProfile, createPropfile }
)(Dashboard);
