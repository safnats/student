const jsonServer = require('json-server');
const cors = require('cors');

const student = jsonServer.create();
const router = jsonServer.router('db.json');

student.use(cors());
student.use(jsonServer.defaults());
student.use(router);

student.listen(3000, () => {
  console.log('Server running at port 3000');
});