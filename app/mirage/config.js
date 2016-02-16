// app/mirage/config.js
export default function() {
  this.namespace = 'api';
  this.get('/users/:id');
  this.get('/chirps');
  this.get('/chirps/:id');
  this.get('/users');
}