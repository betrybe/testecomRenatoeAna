// const frisby = require('frisby');
// const crushMock = require('./crush.json');
// const crushSeed = require('./seed.json');
// const fs = require('fs');
// const path = require('path');
// const refreshCrushs = async () =>
//   fs.writeFile(
//     path.join(__dirname, 'crush.json'),
//     JSON.stringify(crushSeed),
//     (err) => {
//       err && console.log(err)
//     }
//   );

// const headers = { authorization: 1234567890123456 };

// const mockCrushId1 = {
//   name: 'Madonna',
//   age: 62,
//   id: 1,
//   date: { datedAt: '23/10/2020', rate: 5 },
// };
// const mockCrushUpdated = {
//   name: 'Ezra Miller',
//   age: 28,
//   id: 2,
//   date: { datedAt: '23/10/2020', rate: 5 },
// };

// const postCrushMock = {
//   name: 'Zendaya Maree',
//   age: 24,
//   date: { rate: 5, datedAt: '25/09/2020' },
// };

// // const file = () => {}
// // const crushMock = async () => findAll

// beforeEach(async () => await refreshCrushs());

// describe('Crie um endpoint `GET` que `/crush` retorne todos os crushs', () => {
//   it('Endpoint retorna todos os crushs', async () => {
//     return frisby
//       .get('http://localhost:3000/crush', { headers })
//       .expect('json', crushMock);
//   });
// });

// describe('Crie um endpoint que `/crush` crie um novo crush', () => {
//   it('Endpoint retorna crush criado', async () => {
//     return frisby
//       .post('http://localhost:3000/crush', { headers, body: postCrushMock })
//       .expect('json', postCrushMock);
//   });
// });

// describe('Crie um endpoint `GET` que `/crush/:id` que retorna crush com id', () => {
//   it('Endpoint retorna crush com id 1', async () => {
//     return frisby
//       .get('http://localhost:3000/crush/1', { headers })
//       .expect('json', mockCrushId1);
//   });
// });

// describe('Crie um endpoint `PUT` que `/crush/:id` que retorna crush alterado com id', () => {
//   it('Endpoint retorna crush com id 2 atualizado', async () => {
//     return frisby
//       .put('http://localhost:3000/crush/2', { headers, body: mockCrushUpdated })
//       .expect('json', mockCrushUpdated);
//   });
// });

// describe('Crie um endpoint `DELETE` que `/crush/:id` que retorna crush deletado com id', () => {
//   it('Endpoint retorna crush com id 1', async () => {
//     return frisby
//       .put('http://localhost:3000/crush/2', { headers, body: mockCrushUpdated })
//       .expect('json', mockCrushId1);
//   });
//   it('Espera que o crush não esteja incluido no json', () => {
//     expect(crushMock).not.toContain(mockCrushId1);
//   });
// });
