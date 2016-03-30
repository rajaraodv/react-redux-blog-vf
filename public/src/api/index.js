import axios from 'axios';

const inVF = location.href.indexOf('apex') > 0 ? true : false;
const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function getPosts() {
  if (!inVF) {  //local - use axios
    return axios.get(`${ROOT_URL}/posts?query=SELECT Id, Name,Categories__c FROM Post__c`);
  }
  
	// Wrap RemoteObject's function in a Pomise so we can use Redux-promise like axios lib
  return new Promise((resolve, reject) => {

    var post = new SObjectModel.Post();

    // Use the Remote Object to query for 10 items records
    post.retrieve({limit: 10 }, function(err, records, event) {
      if (err) {
        alert(err.message);
       return reject({data: {message: err.message}, status:400});
      }
      //convert result object to Array to match axios+jsforce(local setup)
      var records = event.result.records;
      var posts = Object.keys(records).map(function (key) {return records[key]});

      return resolve({data: {records: posts}}); //note: wrapping in 'data' to match axios + jsforce local setup
    });
  });
}

export function getPost(id) {
  if (!inVF) {  //local - use axios
    return axios.get(`${ROOT_URL}/posts/${id}`);
  }
  
	// Wrap RemoteObject's function in a Pomise so we can use Redux-promise like axios lib
  return new Promise((resolve, reject) => {

    var post = new SObjectModel.Post();

    //Retreive post by id
    post.retrieve({where: {Id: {eq: id }}}, function(err, records, event) {
      if (err) {
        alert(err.message);
       return reject({data: {message: err.message}, status:400});
      }
      //convert result object to Array to match axios+jsforce(local setup)
      var record = event.result.records["0"] || {};

      return resolve({data:record}); //note: wrapping in 'data' to match axios + jsforce local setup
    });
  });
}

export function validateFields(props) {
  if (!inVF) {  //local - use axios
    return  axios.post(`${ROOT_URL}/validatePostFields`, props);
  }
  
	// Wrap RemoteObject's function in a Pomise so we can use Redux-promise like axios lib
  return new Promise((resolve, reject) => {
    var post = new SObjectModel.Post();
    //Retreive post by title
    post.retrieve({where: {Name: {eq: props.Name }}}, function(err, records, event) {
      if (err) {
        alert(err.message);
       return reject({data: {message: err.message}, status:400});
      }
      //convert result object to Array to match axios+jsforce(local setup)
      var record = event.result.records["0"] ? {'Name': 'Name already exists', status: 400} : {};

      return resolve({data:record,  status: 200}); //note: wrapping in 'data' to match axios + jsforce local setup
    });
  });
}


export function createNewPost(props) {
  if (!inVF) { //use axios
    return axios.post(`${ROOT_URL}/posts`, props);
  }
  
	// Wrap RemoteObject's function in a Pomise so we can use Redux-promise like axios lib
  return new Promise((resolve, reject) => {
    var post = new SObjectModel.Post();
    //Retreive post by id
    post.create(props, function(err, records, event) {
      if (err) {
        alert(err.message);
       return reject({data: {message: err.message}, status:400});
      }
      return resolve({data:event.result, status: 200}); 
    });
 });  
}


export function deleteSinglePost(id) {
  if (!inVF) { //local - use axios
  	return axios.delete(`${ROOT_URL}/posts/${id}`);
  }
  
	// Wrap RemoteObject's function in a Pomise so we can use Redux-promise like axios lib
  return new Promise((resolve, reject) => {
    var post = new SObjectModel.Post();
    //Retreive post by id
    post.del([id], function(err, records, event) {
      if (err) {
        alert(err.message);
       return reject({data: {message: err.message}, status:400});
      }
      return resolve({data:event.result, status: 200}); //note: wrapping in 'data' to match axios + jsforce local setup
    });
  });
}



