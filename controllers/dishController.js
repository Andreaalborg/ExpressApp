const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.DYNAMODB_TABLE_NAME;

exports.addDish = async (req, res) => {
  const { name, country } = req.body;
  const params = {
    TableName: tableName,
    Item: {
      'Name': name,
      'Country': country
    }
  };

  try {
    await dynamoDB.put(params).promise();
    res.status(201).json({ message: 'Dish added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDishes = async (req, res) => {
  const params = {
    TableName: tableName
  };

  try {
    const data = await dynamoDB.scan(params).promise();
    res.status(200).json(data.Items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDish = async (req, res) => {
  const { dishKey } = req.params;
  const params = {
    TableName: tableName,
    Key: {
      'Name': dishKey
    }
  };

  try {
    const data = await dynamoDB.get(params).promise();
    if (data.Item) {
      res.status(200).json(data.Item);
    } else {
      res.status(404).json({ message: 'Dish not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
