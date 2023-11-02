const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const bucketName = process.env.S3_BUCKET_NAME;

exports.saveText = async (req, res) => {
  const { content } = req.body;
  const params = {
    Bucket: bucketName,
    Key: 'jsonFile.json',
    Body: JSON.stringify(content),
  };

  try {
    await s3.putObject(params).promise();
    res.status(201).json({ message: 'Text saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getText = async (req, res) => {
  const params = {
    Bucket: bucketName,
    Key: 'jsonFile.json',
  };

  try {
    const data = await s3.getObject(params).promise();
    res.status(200).json(JSON.parse(data.Body.toString()));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
