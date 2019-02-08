const path = require('path');
const fs = require('fs');
const config = require('../config');

class DataService {
  constructor() {
    this.users = [];
    this.dataFilePath = path.join(config.dataPath);
  }

  start() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.dataFilePath, { encoding: 'utf8' }, (error, data) => {
        if (error) {
          this.users = [];
          console.error(error, 'dataService - Error in loadUsers()');
          return reject();
        }
        if (!data) {
          this.users = [];
          return resolve();
        }
        this.users = JSON.parse(data);
        return resolve();
      });
    });
  }

  getUsers() {
    return this.users;
  }

  getUser(name) {
    return this.users.find(user => user.name === name);
  }

  deleteUser(name) {
    this.users = this.users.filter(user => user.name !== name);
    this.saveUsers();
  }

  addUser(user) {
    this.users = this.users.concat([user]);
    this.saveUsers();
  }

  saveUsers() {
    const data = JSON.stringify(this.users);
    fs.writeFile(this.dataFilePath, data, (error) => {
      if (error) {
        console.error(error);
      }
      console.info('Users saved');
    });
  }
}

module.exports = new DataService();
