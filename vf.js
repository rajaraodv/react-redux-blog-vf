var jsforce = require('jsforce');
var conn = new jsforce.Connection({
  serverUrl : 'https://ltng1-dev-ed.my.salesforce.com',
  sessionId : '00Di0000000JEm3!AQ4AQFmFWNUYIMbAI8aZU0gVix5F_sa5LE3LJfDTzWbBpukmsY_zDy1SLxqO3RTbXlslWS.wg.ywRQqQC3zTKS3nzspFdXMM'
});

conn.query("SELECT Name, Categories__c, Content__c FROM Post__c", function(err, result) {
  if (err) { return console.error(err); }
  console.log("total : " + result.totalSize);
  console.log("fetched : " + result.records.length);
});
