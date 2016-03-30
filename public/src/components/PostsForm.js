import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Header from '../containers/HeaderContainer.js';

class PostsForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost.post && !nextProps.newPost.error) {
      this.context.router.push('/');
    }
  }

  render() {
    const {asyncValidating, fields: { Name, Categories__c, Content__c }, handleSubmit, submitting } = this.props;

    return (
      <div>
      <form onSubmit={handleSubmit(this.props.createPost.bind(this))}>
        <div className={`form-group ${Name.touched && Name.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Name*</label>
          <input type="text" className="form-control" {...Name} />
          <div className="help-block">
            {Name.touched ? Name.error : ''}
          </div>
          <div className="help-block">
            {asyncValidating === 'Name'? 'validating..': ''}
          </div>
        </div>

        <div className={`form-group ${Categories__c.touched && Categories__c.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Categories*</label>
          <input type="text" className="form-control" {...Categories__c} />
          <div className="help-block">
            {Categories__c.touched ? Categories__c.error : ''}
          </div>
        </div>

        <div className={`form-group ${Content__c.touched && Content__c.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Content*</label>
          <textarea className="form-control" {...Content__c} />
          <div className="help-block">
            {Content__c.touched ? Content__c.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary"  disabled={submitting} >Submit</button>
        <Link to="/" className="btn btn-error">Cancel</Link>
      </form>


      <br/>
      <br/>
      <br/>

      <div className="panel panel-default">
      <div className="panel-heading"><h3>This form has "Form Validations"!</h3></div>
      <div className="panel-body">
        <b>Learn how to implement it by going through: <a href="https://medium.com/@rajaraodv/adding-a-robust-form-validation-to-react-redux-apps-616ca240c124" target="_blank">Adding A Robust Form Validation To React Redux Apps</a></b> 

        </div>
      </div>

      </div>

    );
  }
}

export default PostsForm;