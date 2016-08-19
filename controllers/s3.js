const aws = require('aws-sdk');
const S3_BUCKET = 'boot2start';

module.exports = {
  get: (query, cb) => {
    const s3 = new aws.S3();
    const fileName = query['file-name'];
    const fileType = query['file-type'];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read'
    };

    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log(err);
        return cb(null, err)
      }
      console.log(data);
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
      return cb(returnData);
    });
  }
}
